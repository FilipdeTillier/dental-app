"use client";

import Table from "../Table/Table";
import { data } from "./mock";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const handleRowClick = (item: User) => {
  console.log("Clicked row:", item);
};

const DashboardTable = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;
  return (
    <Table
      data={data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)}
      pageNumber={pageNumber}
      pageNumbers={data.length / pageSize}
      onRowClick={handleRowClick}
      onPageChange={(page) => {
        setPageNumber(page);
      }}
    />
  );
};

export default DashboardTable;
