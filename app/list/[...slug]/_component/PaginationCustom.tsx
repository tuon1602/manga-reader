"use client";

import React, { useMemo, useState } from "react";
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
  const [pageRanges, setPageRanges] = useState<Number[]>([]);
  useMemo(() => {
    const myPages = Math.floor(
      page.pagination.totalItems / page.pagination.totalItemsPerPage
    );
    setTotalPage(myPages);

    const dataPageRanges = page.pagination.currentPage + page.pagination.pageRanges;
    const newPageRanges = [];
    for (let i = 1; i <= dataPageRanges; i++) {
      newPageRanges.push(i);
    }
    setPageRanges(newPageRanges);
  }, [page.pagination.currentPage,page.pagination.pageRanges, page.pagination.totalItems,page.pagination.totalItemsPerPage]);

  return (
    <Pagination>
      <PaginationContent className="flex gap-2">
        <PaginationItem>
          {currentPage === 1 ? null : (
            <PaginationPrevious href={`/list/${slug[0]}/${currentPage - 1}`} className="border border-primary" />
          )}
        </PaginationItem>
        {pageRanges.map((item, index) => (
          <PaginationItem key={index}>
            <PaginationLink
            className="border border-primary"
              href={`/list/${slug[0]}/${item}`}
              isActive={item === page?.pagination.currentPage ? true : false}
            >
              {item.toString()}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/list/${slug[0]}/${totalPage}`}
            isActive={totalPage === page?.pagination.currentPage ? true : false}
            className="border border-primary"
          >
            {totalPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {currentPage === totalPage ? null : (
            <PaginationNext href={`/list/${slug[0]}/${currentPage + 1}`}  className="border border-primary"/>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationCustom;
