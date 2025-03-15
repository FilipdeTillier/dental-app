"use client";

import { Client } from "@/src/types/client";
import Table from "../Table/Table";
import { data } from "./mock";
import { useState } from "react";

const handleRowClick = (item: Client) => {
  console.log("Clicked row:", item);
};

const DashboardTable = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;

  return (
    <>
      <Table
        data={data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)}
        pageNumber={pageNumber}
        pageSize={pageSize}
        pageNumbers={data.length / pageSize}
        onRowClick={handleRowClick}
        onPageChange={(page) => {
          setPageNumber(page);
        }}
      />
    </>
  );
};

export default DashboardTable;
