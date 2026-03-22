import React from 'react';

/**
 * LiveChat — In-match chat panel beside the console.
 * Separated from the old Console component for modularity.
 */
const LiveChat = ({
  chatMessages = [],
  onSendMessage = () => {}
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const messagesEndRef = React.useRef(null);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue('');
  };

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);
  return (
    <div className="flex flex-col h-full bg-slate-950/40 border-l border-slate-800">
      {/* Tab Header */}
      <div className="flex border-b border-slate-800 px-4 shrink-0">
        <button className="px-5 py-3 text-xs font-black uppercase tracking-widest border-b-2 border-primary text-white flex items-center gap-2 transition-all">
          <span className="material-symbols-outlined text-base">forum</span>
          Live Chat
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto custom-scrollbar text-xs">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`flex flex-col gap-1 ${msg.isAdmin ? 'items-end' : ''}`}>
            <span
              className={`font-black uppercase tracking-tighter ${
                msg.isAdmin ? 'text-orange-400' : 'text-primary'
              }`}
            >
              {msg.user}
            </span>
            <p
              className={`${
                msg.isAdmin
                  ? 'text-slate-400 bg-primary/5 border-primary/20 text-right'
                  : 'text-slate-400 bg-slate-800/40 border-slate-700/30'
              } p-2 rounded-lg ${msg.isAdmin ? 'rounded-tr-none' : 'rounded-tl-none'} border`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 shrink-0 border-t border-slate-800">
        <div className="relative">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="w-full bg-slate-900 border border-slate-700 text-xs rounded-xl pl-4 pr-10 py-2.5 focus:ring-1 focus:ring-primary focus:border-primary text-slate-200 outline-none"
            placeholder="Type a message..."
            type="text"
          />
          <button 
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer hover:scale-110 transition-all"
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
