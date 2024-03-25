"use client";
import React from "react";
import styles from "./CompletedTodoPage.module.css";
import { useSelector } from "react-redux";
import TodoCard from "../reusable/todoCard/TodoCard";
import EmptyState from "../reusable/emptyState/EmptyState";

const CompletedTodoPage = () => {
  const todos = useSelector((state) => state.todos.todos);
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className={styles.container}>
      {completedTodos.length ? (
        completedTodos.map((item, index) => (
          <TodoCard
            title={item.title}
            detail={item.detail}
            key={"COMPLETED_TODOS_" + index}
          />
        ))
      ) : (
        <EmptyState title={"You don't have a complete task at the moment"} />
      )}
    </div>
  );
};

export default CompletedTodoPage;
