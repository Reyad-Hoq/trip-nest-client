"use client";

import { Pagination } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

export function PaginationBasic({ totalPages = 1, currentPage = 1 }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(currentPage) || 1;
  const totalPage = Number(totalPages) || 1;


  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPage) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);

    router.push(`/tickets?${params.toString()}`);
  };

  return (
    <div>
      <Pagination  >
        <Pagination.Content className="max-w-5xl mx-auto">
          {/* Previous Button */}
          <Pagination.Item>
            <Pagination.Previous
              isDisabled={page <= 1}
              onPress={() => handlePageChange(page - 1)}
            >
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>

          {/* Page Numbers */}
          {Array.from({ length: totalPage }, (_, i) => i + 1).map((p) => (
            <Pagination.Item key={p}>
              <Pagination.Link
                isActive={p === page}
                onPress={() => handlePageChange(p)}
              >
                {p}
              </Pagination.Link>
            </Pagination.Item>
          ))}

          {/* Next Button */}
          <Pagination.Item>
            <Pagination.Next
              isDisabled={page >= totalPage} // 
              onPress={() => handlePageChange(page + 1)}
            >
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  );
}