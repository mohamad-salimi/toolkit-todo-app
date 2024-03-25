import Layout from "@/components/reusable/layout/Layout";
import React from "react";

const CompletedTaskLayout = ({ children }) => {
  return (
    <>
      <header>
        <Layout title={"Completed Task"} />
      </header>
      <main>{children}</main>
    </>
  );
};

export default CompletedTaskLayout;
