"use client";

import { useEffect, useState } from "react";

interface TableProps<T> {
  data: T[];
  pageSize: number;
  pageNumber: number;
  onRowClick: (item: T) => void;
  onPageChange: (newPage: number) => void;
  pageNumbers: number;
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table = <T extends Record<string, any>>({
  data,
  pageNumber,
  onRowClick,
  onPageChange,
  pageNumbers,
}: TableProps<T>) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  const isMobile = useIsMobile();

  const renderPageNumbers = () => {
    if (isMobile) {
      return (
        <button
          key={pageNumber}
          disabled
          className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 border rounded-md"
        >
          {pageNumber}
        </button>
      );
    }

    // For larger screens - existing pagination logic
    const pages = [];

    // Always show first 3 pages
    for (let i = 1; i <= Math.min(3, pageNumbers); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 text-sm font-medium ${
            pageNumber === i
              ? "bg-gray-100 text-gray-700"
              : "text-gray-700 hover:bg-gray-50"
          } border rounded-md`}
        >
          {i}
        </button>
      );
    }

    // If more than 3 pages, add dots and last 2 pages
    if (pageNumbers > 3) {
      pages.push(
        <button
          key="dots"
          disabled
          className="px-3 py-1 text-sm font-medium text-gray-700 border rounded-md"
        >
          ...
        </button>
      );

      // Add last two pages
      for (let i = pageNumbers - 1; i <= pageNumbers; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-3 py-1 text-sm font-medium ${
              pageNumber === i
                ? "bg-gray-100 text-gray-700"
                : "text-gray-700 hover:bg-gray-50"
            } border rounded-md`}
          >
            {i}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-x-auto shadow-md rounded-lg">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  {columns.map((column) => (
                    <th key={column} className="px-6 py-3">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => onRowClick(item)}
                    className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                  >
                    {columns.map((column) => (
                      <td key={`${index}-${column}`} className="px-6 py-4">
                        {item[column]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-white border-t gap-3">
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start">
          <p className="text-sm text-gray-700">
            Page {pageNumber} of {pageNumbers}
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end space-x-2">
          <button
            onClick={() => onPageChange(pageNumber - 1)}
            disabled={pageNumber <= 1}
            className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border rounded-md disabled:opacity-50"
          >
            ←
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => onPageChange(pageNumber + 1)}
            disabled={pageNumber >= pageNumbers}
            className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border rounded-md disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
