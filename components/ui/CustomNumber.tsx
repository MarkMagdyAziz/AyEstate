import Image from "next/image";
import React from "react";

function CustomNumber() {
  return (
    <form className="mx-auto max-w-[230px]">
      <div className="flex items-center">
        <button
          data-dropdown-toggle="dropdown"
          className="z-10 inline-flex flex-shrink-0 items-center gap-1 rounded-s-xl border border-[#E4E9EE] bg-transparent p-1.5 text-center text-base font-normal text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
          type="button"
        >
          USD
          <Image
            width={12}
            height={12}
            src="/arrow-down.svg"
            alt="arrow down icon"
          />
        </button>
        <div
          id="dropdown-phone"
          className="z-10 hidden w-52 divide-y divide-gray-100 rounded-lg bg-white shadow"
        >
          <ul aria-labelledby="dropdown-phone-button">
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <div className="inline-flex items-center">USD</div>
              </button>
            </li>
          </ul>
        </div>
        <label
          htmlFor="currency"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Currency:
        </label>
        <div className="relative w-full">
          <input
            type="number"
            id="currency"
            className="z-20 block w-full rounded-e-lg border border-s-0 border-[#E4E9EE] bg-transparent p-2 text-sm"
            placeholder="Minimum Price"
          />
        </div>
      </div>
    </form>
  );
}

export default CustomNumber;
