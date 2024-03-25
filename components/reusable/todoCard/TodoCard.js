"use client";
import React from "react";
import styles from "./TodoCard.module.css";
import Image from "next/image";
import pencil from "../../../public/icons/pencil.svg";
import trash from "../../../public/icons/trash.svg";
import circletick from "../../../public/icons/circletick.svg";
import { removeTodo, toggleTodo } from "@/redux/features/todos/todosSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const TodoCard = ({ title, detail, id, completed }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const editTodoHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <div className={completed ? styles.completedContainer : styles.container}>
      <div className={styles.todoCardSection}>
        <p className={styles.todoTitle}>{title}</p>
        <p className={styles.todoDescription}>{detail}</p>
      </div>
      {id && (
        <div className={styles.iconSection}>
          <Image
            src={pencil}
            alt="pencil"
            width={25}
            height={25}
            onClick={() => editTodoHandler()}
          />
          <Image
            src={trash}
            alt="trash"
            width={25}
            height={25}
            onClick={() => deleteTodoHandler(id)}
          />
          <Image
            src={circletick}
            alt="tick"
            width={25}
            height={25}
            onClick={() => toggleTodoHandler(id)}
          />
        </div>
      )}
    </div>
  );
};

export default TodoCard;
