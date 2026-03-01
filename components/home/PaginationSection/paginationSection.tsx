"use client";

import { JSX } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps): JSX.Element {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPrevious = (): void => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = (): void => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-16 flex items-center justify-between text-[#159EEC] text-sm">

      {/* Previous */}
      <button
        onClick={goToPrevious}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 transition ${
          currentPage === 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:opacity-70"
        }`}
      >
        <span>←</span>
        <span>Previous Page</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3 font-medium">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`transition ${
              page === currentPage
                ? "text-[#1F2B6C] font-bold"
                : "hover:text-[#1F2B6C]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 transition ${
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:opacity-70"
        }`}
      >
        <span>Next Page</span>
        <span>→</span>
      </button>
    </div>
  );
}