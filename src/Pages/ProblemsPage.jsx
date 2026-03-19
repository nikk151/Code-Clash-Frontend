import React from 'react';
import ProblemsHero from '../components/problems/ProblemsHero';
import ProblemCategories from '../components/problems/ProblemCategories';
import ProblemTable from '../components/problems/ProblemTable';
import useProblems from '../hooks/useProblems';

// ProblemsPage — only renders the UNIQUE content for the problems page.
// Data fetching is handled by the useProblems() hook.

function ProblemsPage() {
  const { problems, currentPage, setCurrentPage, loading, error } = useProblems(5);

  if (error) return <div className="text-center text-red-400 py-20">{error}</div>;

  function getProblemsRange() {
    let start = (currentPage - 1) * problems.pagination.itemsPerPage + 1;
    let end = currentPage * problems.pagination.itemsPerPage;
    if (end > problems.pagination.totalItems) {
      end = problems.pagination.totalItems;
    }
    return `${start}-${end}`;
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <ProblemsHero />
        <ProblemCategories />
      </div>

      <ProblemTable problems={problems && problems.problems} />

      {/* Pagination */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          Showing <span className="text-white font-bold">{problems && getProblemsRange()}</span> of{' '}
          <span className="text-white font-bold">{problems && problems.pagination.totalItems}</span>
        </p>
        <div className="flex gap-1.5 md:gap-2">
          <button
            className="size-9 md:size-10 flex items-center justify-center rounded-lg glass-card text-slate-400 hover:text-white transition-all cursor-pointer"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <span className="material-symbols-outlined text-sm md:text-base" disabled={currentPage === 1}>
              chevron_left
            </span>
          </button>
          <button className="size-9 md:size-10 flex items-center justify-center rounded-lg bg-primary text-white text-sm md:text-base font-bold cursor-pointer">
            {currentPage}
          </button>
          <button
            className="size-9 md:size-10 flex items-center justify-center rounded-lg glass-card text-slate-400 hover:text-white transition-all cursor-pointer"
            onClick={() => setCurrentPage((next) => Math.min(next + 1, problems && problems.pagination.totalPages))}
          >
            <span className="material-symbols-outlined text-sm md:text-base" disabled={problems && currentPage === problems.pagination.totalPages}>
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProblemsPage;
