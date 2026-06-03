import React from 'react'

const Header = () => {
  return (
    <div>
      <>
  {/* Breadcrumb */}
  <nav className="flex-warp md:flex justify-between" aria-label="Breadcrumb">
    <ol className="inline-flex items-center mb-3 space-x-2.5 md:space-x-2 rtl:space-x-reverse sm:mb-0">
      <li>
        <div className="flex items-center">
          <a
            href="#"
            className="text-sm font-medium text-body hover:text-fg-brand"
          >
            flowbite.com
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center space-x-2.5">
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180 text-body"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 5 7 7-7 7"
            />
          </svg>
          <a
            href="#"
            className="text-sm font-medium text-body hover:text-fg-brand"
          >
            develop
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center space-x-2.5">
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180 text-body"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="text-sm font-medium text-body-subtle">
            Issue #312
          </span>
          <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm me-2.5">
            docs
          </span>
        </div>
      </li>
    </ol>
    <div>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        type="button"
        className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
      >
        <svg
          className="w-3.5 h-3.5 me-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3"
          />
        </svg>
        Fix #6597
        <svg
          className="w-3.5 h-3.5 ms-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32 block hidden"
      >
        <ul
          className="p-2 text-sm text-body font-medium"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
            >
              New branch
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
            >
              Rename
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>
    </div>
  )
}

export default Header
