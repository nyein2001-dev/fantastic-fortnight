"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import StringLang from "@/utilities/StringLang";

function AppHeader({ settings, categories, languages, currencies }) {
  const [searchKey, setSearchKey] = useState("");

  return (
    <>
      <div className="w-full bg-black lg:block hidden">
        <div className="w-full border-b border-primary-border">
          <div className="theme-container mx-auto h-[80px]">
            <div className="flex justify-between items-center  h-full">
              <div className="flex justify-between max-w-[740px] w-full">
                <div>
                  <Link href="/">
                    <img
                      src={process.env.BASE_URL + settings.logo}
                      alt=""
                      className="max-h-[38px]"
                    />
                  </Link>
                </div>
                <div className="2xl:w-[462px] relative">
                  <input
                    value={searchKey}
                    onChange={(e) => setSearchkey(e.target.value)}
                    placeholder="Search your products..."
                    className="h-[52px] rounded ltr:pl-[22px] ltr:pr-[100px] rtl:pr-[22px] rtl:pl-[100px]  bg-[#0B0E12] border border-[#23262B] focus:outline-0 text-white  w-full placeholder:text-sm"
                    type="text"
                  />
                  <Link href={`/products?search=${searchKey}`}>
                    <div className="w-[90px] h-[42px] rounded flex justify-center items-center bg-primary-yellow hover:bg-white common-transition absolute  top-1.5 right-2 rtl:right-auto rtl:left-2">
                      <span className="text-sm font-semibold text-primary-black">
                        <StringLang string="Search" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex rtl:space-x-reverse space-x-5 items-center">
                <div>
                  <Link href="/auth/profile/favorites">
                    <span>
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 4.50005C17.1045 4.50005 18 5.39548 18 6.50005M11 3.70259L11.6851 3.00005C13.816 0.814763 17.2709 0.814761 19.4018 3.00005C21.4755 5.12665 21.5392 8.55385 19.5461 10.76L13.8197 17.0982C12.2984 18.782 9.70154 18.782 8.18026 17.0982L2.45393 10.76C0.460783 8.55388 0.5245 5.12667 2.5982 3.00007C4.72912 0.814774 8.18404 0.814776 10.315 3.00007L11 3.70259Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link href="/cart">
                    <span className="relative">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M11 12C13.3561 13.3404 14.6476 13.3263 17 12"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* <span className="absolute left-[13px] -top-[6px] w-[13px] h-[13px] flex justify-center items-center text-primary-black bg-[#FFB321] rounded-full text-[8px]">
                        {data?.items?.length || 0}
                      </span> */}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
