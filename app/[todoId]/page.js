"use client";
import EditTodoPage from "@/components/editTodoPage/EditTodoPage";
import React from "react";

const TodoEdit = ({ params }) => {
  const todoId = params.todoId;
  return <EditTodoPage id={todoId} />;
};

export default TodoEdit;
