"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationCustom = ({ page, slug }: { page: any; slug: any }) => {
  let currentPage = parseInt(slug[1]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [pageRanges, setPageRanges] = useState<number[]>([]);
  const [lastPages, setLastPages] = useState<number[]>([]);
  useMemo(() => {
    const myPages = Math.floor(
      page.pagination.totalItems / page.pagination.totalItemsPerPage
    );
    setTotalPage(myPages);

    const dataPageRanges = page.pagination.pageRanges;
    if (currentPage >= totalPage - 4 && currentPage <= totalPage) {
      const newLastPageRanges = [];
      for (let i = totalPage - 4; i <= totalPage; i++) {
        newLastPageRanges.push(i);
      }
      setLastPages(newLastPageRanges);
    }
    if (totalPage < dataPageRanges) {
      const newPageRanges = [];
      for (let i = 1; i <= totalPage; i++) {
        newPageRanges.push(i);
      }
      setPageRanges(newPageRanges);
    }
    const newPageRanges = [];
    for (let i = 1; i <= dataPageRanges; i++) {
      newPageRanges.push(i);
    }
    setPageRanges(newPageRanges);
  }, [
    page.pagination.currentPage,
    page.pagination.pageRanges,
    page.pagination.totalItems,
    page.pagination.totalItemsPerPage,
    totalPage,
    currentPage,
  ]);
  return (
    <>
      {/* if totalpage is lower than renderpage */}
      {totalPage <= page.pagination.pageRanges ? (
        <Pagination>
          <PaginationContent className="flex gap-2">
            {pageRanges.map((item: any, index: any) => (
              <PaginationItem key={index}>
                <PaginationLink
                  className="border border-primary"
                  href={`/list/${slug[0]}/${item}`}
                  isActive={
                    item === page?.pagination.currentPage ? true : false
                  }
                >
                  {item.toString()}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      ) : (
        <>
          {/* from page 1 to 4 */}
          {currentPage <=
            (pageRanges.length > 0 ? pageRanges[pageRanges.length - 2] : 0) && (
            <Pagination>
              <PaginationContent className="flex gap-2 max-md:flex-col">
                <PaginationItem>
                  {currentPage === 1 ? null : (
                    <PaginationPrevious
                      href={`/list/${slug[0]}/${currentPage - 1}`}
                      className="border border-primary"
                    />
                  )}
                </PaginationItem>
                <PaginationContent>
                  {pageRanges.map((item: any, index: any) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        className="border border-primary"
                        href={`/list/${slug[0]}/${item}`}
                        isActive={
                          item === page?.pagination.currentPage ? true : false
                        }
                      >
                        {item.toString()}
                      </PaginationLink>
                    </PaginationItem>
                  ))}{" "}
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href={`/list/${slug[0]}/${totalPage}`}
                      isActive={
                        totalPage === page?.pagination.currentPage
                          ? true
                          : false
                      }
                      className="border border-primary"
                    >
                      {totalPage}
                    </PaginationLink>
                  </PaginationItem>
                </PaginationContent>
                <PaginationItem>
                  {currentPage === totalPage ? null : (
                    <PaginationNext
                      href={`/list/${slug[0]}/${currentPage + 1}`}
                      className="border border-primary"
                    />
                  )}
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}

          {/* from page 5 to last 5 page */}
          {currentPage >= pageRanges[pageRanges.length - 1] &&
            currentPage <= totalPage - 4 && (
              <Pagination>
                <PaginationContent className="flex gap-2 max-md:flex-col">
                  <PaginationItem>
                    {currentPage === 1 ? null : (
                      <PaginationPrevious
                        href={`/list/${slug[0]}/${currentPage - 1}`}
                        className="border border-primary"
                      />
                    )}
                  </PaginationItem>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationLink
                        href={`/list/${slug[0]}/1`}
                        isActive={
                          1 === page?.pagination.currentPage ? true : false
                        }
                        className="border border-primary"
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`/list/${slug[0]}/${
                          page?.pagination.currentPage - 1
                        }`}
                        // isActive={
                        //   currentPage === page?.pagination.currentPage ? true : false
                        // }
                        className="border border-primary"
                      >
                        {page?.pagination.currentPage - 1}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`/list/${slug[0]}/${page?.pagination.currentPage}`}
                        isActive={
                          currentPage === page?.pagination.currentPage
                            ? true
                            : false
                        }
                        className="border border-primary"
                      >
                        {page?.pagination.currentPage}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`/list/${slug[0]}/${
                          page?.pagination.currentPage + 1
                        }`}
                        // isActive={
                        //   totalPage === page?.pagination.currentPage ? true : false
                        // }
                        className="border border-primary"
                      >
                        {page?.pagination.currentPage + 1}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`/list/${slug[0]}/${totalPage}`}
                        isActive={
                          totalPage === page?.pagination.currentPage
                            ? true
                            : false
                        }
                        className="border border-primary"
                      >
                        {totalPage}
                      </PaginationLink>
                    </PaginationItem>
                  </PaginationContent>
                  <PaginationItem>
                    {currentPage === totalPage ? null : (
                      <PaginationNext
                        href={`/list/${slug[0]}/${currentPage + 1}`}
                        className="border border-primary"
                      />
                    )}
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}

          {/* last 5 page */}
          {currentPage <= totalPage && currentPage > totalPage - 4 && (
            <Pagination>
              <PaginationContent className="flex gap-2 max-md:flex-col">
                <PaginationItem>
                  {currentPage === 1 ? null : (
                    <PaginationPrevious
                      href={`/list/${slug[0]}/${currentPage - 1}`}
                      className="border border-primary"
                    />
                  )}
                </PaginationItem>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink
                      href={`/list/${slug[0]}/1`}
                      isActive={
                        1 === page?.pagination.currentPage ? true : false
                      }
                      className="border border-primary"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  {lastPages.map((item: any, index: any) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        className="border border-primary"
                        href={`/list/${slug[0]}/${item}`}
                        isActive={
                          item === page?.pagination.currentPage ? true : false
                        }
                      >
                        {item.toString()}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                </PaginationContent>

                <PaginationItem>
                  {currentPage === totalPage ? null : (
                    <PaginationNext
                      href={`/list/${slug[0]}/${currentPage + 1}`}
                      className="border border-primary"
                    />
                  )}
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </>
  );
};

export default PaginationCustom;
