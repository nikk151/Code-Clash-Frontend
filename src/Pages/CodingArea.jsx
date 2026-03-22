import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Panel, Group, Separator } from 'react-resizable-panels';
import Header from '../components/ui/Header';
import Logo from '../components/ui/Logo';
import Button from '../components/ui/Button';
import ProblemDescription from '../components/match/ProblemDescription';
import CodeEditor from '../components/match/CodeEditor';
import TestResults from '../components/match/TestResults';
import LiveChat from '../components/match/LiveChat';
import useAuth from '../hooks/useAuth';
import socket from '../socket/socketClient';
import { getMatch, submitCode, runSampleTestCases } from '../api/matchApi';

/**
 * CodingArea — The main competitive coding arena.
 *
 * Layout uses `react-resizable-panels` for drag-to-resize panes:
 * ┌───────────┬──────────────────────────────────┐
 * │           │         Code Editor              │
 * │  Problem  │        (Monaco, themed)          │
 * │Description├──────────────────────────────────┤
 * │(Resizable)│         Test Results             │
 * └───────────┴──────────────────────────────────┘
 * + Sliding Overlay for Live Chat on the right.
 */
function CodingArea() {
  const { roomCode } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [code, setCode] = useState('// Write your solution here...\n');
  const [language, setLanguage] = useState('javascript');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { user: 'System', text: 'Match started! Good luck!', isAdmin: true }
  ]);
  const [submissionsLeft, setSubmissionsLeft] = useState(3);
  
  // Custom Match State
  const [match, setMatch] = useState(null);
  const [loadingMatch, setLoadingMatch] = useState(true);
  const [matchError, setMatchError] = useState('');
  
  // Execution State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResults, setTestResults] = useState([]);

  // 1. Fetch Match Data & Connect to Socket
  useEffect(() => {
    if (!roomCode || !user) return;

    socket.connect();
    socket.emit('join-room', { roomCode, username: user.username });
    
    socket.on('match-over', (data) => {
      alert(`Match Over! ${data.winner} won the match.`);
      // Delay navigation a bit to let them see
      setTimeout(() => navigate('/post-match', { state: { result: data } }), 3000);
    });

    const initMatch = async () => {
      try {
        setLoadingMatch(true);
        const { data } = await getMatch(roomCode);
        setMatch(data.match);
        if (data.match?.problemId?.starterCode) {
           setCode(data.match.problemId.starterCode);
        }
        
        // Calculate submissions left based on player history
        const me = data.match.players.find(p => p.userId === user._id);
        if (me) {
          setSubmissionsLeft(Math.max(0, 3 - (me.submissionCount || 0)));
        }
      } catch (err) {
        setMatchError('Could not load match data.');
      } finally {
        setLoadingMatch(false);
      }
    };
    initMatch();

    // Listen for chat messages
    socket.on('new-message', (data) => {
      setChatMessages(prev => [...prev, { user: data.username, text: data.message, isAdmin: false }]);
    });

    return () => {
      socket.off('match-over');
      socket.off('new-message');
    };
  }, [roomCode, user, navigate]);

  // 2. Submit Code handler
  const handleSubmitCode = async () => {
    if (isSubmitting || submissionsLeft <= 0) return;
    try {
      setIsSubmitting(true);
      const { data } = await submitCode(roomCode, { code, language });
      
      if (data.submissionsLeft !== undefined) {
        setSubmissionsLeft(data.submissionsLeft);
      }
      
      // The API returns results array
      if (data.results) {
        const mappedResults = data.results.map((r, i) => ({
          name: `Test Case ${i + 1}`,
          status: r.passed ? 'success' : 'error',
          time: 'N/A',
          output: r.error ? 'Error' : (r.passed ? 'Passed' : 'Wrong Answer'),
          input: r.input,
          expectedOutput: r.expectedOutput,
          actualOutput: r.yourOutput
        }));
        setTestResults(mappedResults);
      }
      
      // If server replied that we passed all hidden test cases and won
      if (data.allPassed && data.message.includes('win')) {
         alert("You passed all cases and Won!");
         setTimeout(() => navigate('/post-match', { state: { matchData: data } }), 2000);
      } else if (data.allPassed) {
         alert("You passed all test cases! Waiting for opponent to finish...");
      } else if (data.message.includes('Maximum 3')) {
         alert("You have reached maximum submissions!");
      }
      
    } catch (error) {
       console.error(error);
       alert(error.response?.data?.message || 'Code evaluation failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRunSample = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);
      const { data } = await runSampleTestCases(roomCode, { code, language });
      
      if (data.results) {
        const mappedResults = data.results.map((r, i) => ({
          name: `Sample Case ${i + 1}`,
          status: r.passed ? 'success' : 'error',
          time: 'N/A',
          output: r.passed ? 'Passed' : 'Failed',
          input: r.input,
          expectedOutput: r.expectedOutput,
          actualOutput: r.yourOutput
        }));
        setTestResults(mappedResults);
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Sample Execution failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = (text) => {
    socket.emit('send-message', { roomCode, message: text });
    setChatMessages(prev => [...prev, { user: 'You', text, isAdmin: false }]);
  };

  const handleLeaveRoom = () => {
    if (window.confirm("Are you sure you want to leave the match?")) {
      // Disconnect or emit leave-room if needed, though socket disconnects on unmount usually
      socket.emit('leave-room', { roomCode, username: user.username });
      navigate('/dashboard');
    }
  };

  const headerLeft = (
    <div className="flex items-center gap-3">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={handleLeaveRoom} 
        className="text-slate-400 hover:text-white px-2"
        title="Leave Match"
      >
        <span className="material-symbols-outlined text-xl">arrow_back</span>
      </Button>
      <Logo variant="glow" />
      <div className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
        <span className="text-primary text-xs font-mono font-bold animate-pulse uppercase">
          Live Match #{roomCode}
        </span>
      </div>
    </div>
  );

  const headerRight = (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Timer & Submissions */}
      <div className="hidden sm:flex items-center gap-4 px-4 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">timer</span>
          <span className="text-white font-mono font-bold">24:50</span>
        </div>
        <div className="w-px h-4 bg-slate-700"></div>
        <div className="flex items-center gap-2">
          <span className={`font-mono font-bold text-xs ${submissionsLeft > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {submissionsLeft}/3 Submits
          </span>
        </div>
      </div>
      
      {/* Chat Toggle */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`p-2 rounded-lg border transition-all flex items-center justify-center ${
          isChatOpen 
            ? 'bg-primary/20 border-primary text-primary' 
            : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'
        }`}
        title="Live Chat"
      >
        <span className="material-symbols-outlined text-lg">
          {isChatOpen ? 'close' : 'forum'}
        </span>
      </button>

      {/* Run Sample */}
      <Button 
        variant="ghost" 
        size="md" 
        onClick={handleRunSample}
        disabled={isSubmitting || loadingMatch}
        className="bg-slate-800 border-slate-700 hover:bg-slate-700"
      >
        <span className="material-symbols-outlined text-sm mr-2 text-primary">play_arrow</span>
        Run
      </Button>

      {/* Submit */}
      <Button 
        variant="accent" 
        size="md" 
        onClick={handleSubmitCode}
        disabled={isSubmitting || loadingMatch || submissionsLeft <= 0}
      >
        {isSubmitting ? 'Evaluating...' : 'Submit Code'}
      </Button>
    </div>
  );

  return (
    <div className="bg-background-dark font-display text-slate-100 h-screen overflow-hidden flex flex-col">
      <Header leftContent={headerLeft} rightContent={headerRight} />

      <main className="flex-1 overflow-hidden relative">
        <Group orientation="horizontal" className="h-full w-full" autoSaveId="main-layout" id="main-group">
          {/* Left — Problem Description */}
          <Panel id="problem-panel" defaultSize={30} minSize={15} maxSize={10000}>
            <div className="h-full border-r border-slate-800 bg-slate-900/40 overflow-y-auto custom-scrollbar">
              <ProblemDescription problem={match?.problemId} loading={loadingMatch} error={matchError} />
            </div>
          </Panel>

          {/* Draggable Vertical Handle */}
          <Separator id="main-separator" className="w-1.5 bg-slate-800 hover:bg-primary/60 transition-colors cursor-col-resize shrink-0 relative z-10 flex items-center justify-center">
            <div className="h-8 w-0.5 bg-slate-600 rounded-full" />
          </Separator>

          {/* Right — Editor (top) + Console (bottom) */}
          <Panel id="right-panel" defaultSize={70} minSize={40}>
            <Group orientation="vertical" className="h-full w-full" autoSaveId="editor-layout" id="editor-group">
              {/* Top - Code Editor */}
              <Panel id="editor-panel" defaultSize={65} minSize={20}>
                <div className="h-full border-b border-slate-800 flex flex-col relative bg-[#1e293b]">
                  <CodeEditor 
                    code={code} 
                    onChange={(value) => setCode(value)}
                    selectedLanguage={language}
                    onLanguageChange={(lang) => setLanguage(lang)}
                    onCopy={() => navigator.clipboard.writeText(code)}
                    onReset={() => setCode(match?.problemId?.starterCode || '')}
                  />
                </div>
              </Panel>

              {/* Draggable Horizontal Handle */}
              <Separator id="editor-separator" className="h-1.5 bg-slate-800 hover:bg-primary/60 transition-colors cursor-row-resize shrink-0 relative z-10 flex items-center justify-center">
                <div className="w-8 h-0.5 bg-slate-600 rounded-full" />
              </Separator>

              {/* Bottom - Test Results */}
              <Panel id="test-panel" defaultSize={35} minSize={10}>
                <div className="h-full overflow-hidden">
                  <TestResults testResults={testResults.length > 0 ? testResults : undefined} />
                </div>
              </Panel>
            </Group>
          </Panel>
        </Group>

        {/* Sliding Live Chat Sidebar Overlay */}
        <div 
          className={`absolute top-0 right-0 h-full w-[340px] bg-slate-950/95 backdrop-blur-md shadow-2xl border-l border-slate-800 z-50 transform transition-transform duration-300 ease-out ${
            isChatOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <LiveChat chatMessages={chatMessages} onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
}

export default CodingArea;
