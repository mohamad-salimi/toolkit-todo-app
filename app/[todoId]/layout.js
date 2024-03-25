import Layout from "@/components/reusable/layout/Layout";
import React from "react";

const EditTodoLayout = ({ children }) => {
  return (
    <>
      <header>
        <Layout title={"Edit Todo"} />
      </header>
      <main>{children}</main>
    </>
  );
};

export default EditTodoLayout;
