"use client";
import Image from "next/image";
import { useState } from "react";

function ListingPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 30;
  const itemsPerPage = 10;
  const pagesCount = Math.ceil(totalItems / itemsPerPage);
  const pagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > pagesCount) return;
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <Image
          width={20}
          height={20}
          src="icons/arrow-left.svg"
          alt="Previous page icon"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
        />
      </button>
      <div className="flex items-center gap-3">
        {pagesArray.map((p) => {
          return (
            <button
              aria-label={`Go to page ${p}`}
              onClick={() => handlePageChange(p)}
              key={p}
              className={`rounded-lg px-[18px] py-[14px] font-semibold leading-[18px] ${currentPage === p ? "bg-app-primary text-[#111111]" : "bg-app-lgrey3 text-app-grey"}`}
            >
              {p}
            </button>
          );
        })}
        {pagesCount > currentPage && (
          <button
            disabled
            className="rounded-lg bg-app-lgrey3 px-[18px] py-[14px] font-semibold leading-[18px] text-app-grey"
          >
            ...
          </button>
        )}
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pagesCount}
        aria-label="Next page"
      >
        <Image
          width={20}
          height={20}
          src="icons/arrow-right-pagination.svg"
          alt="Next page icon"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JlZW5zY2FwZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3JlZW5zY2FwZSIgdmlld0JveD0iMCAwIDAgMCI+PHBhdGggZD0iTTEyIDBIMFoiLz48L3N2Zz4="
        />
      </button>
    </>
  );
}

export default ListingPagination;
