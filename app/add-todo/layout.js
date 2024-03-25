import Layout from "@/components/reusable/layout/Layout";
import React from "react";

const AddTodoLayout = ({ children }) => {
  return (
    <>
      <header>
        <Layout title={"Add Task"} />
      </header>
      <main>{children}</main>
    </>
  );
};

export default AddTodoLayout;
