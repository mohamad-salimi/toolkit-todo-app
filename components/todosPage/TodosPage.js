"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import TodoCard from "../reusable/todoCard/TodoCard";
import styles from "./TodosPage.module.css";
import Image from "next/image";
import calendar from "../../public/icons/calendar.svg";
import EmptyState from "../reusable/emptyState/EmptyState";
import BottomNavigation from "./bottomNavigation/BottomNavigation";

const Home = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>TODO APP</h2>
        <Image src={calendar} alt="calendar" />
      </div>
      <div className={styles.todoCardSection}>
        {todos.length ? (
          todos?.map((item, index) => (
            <TodoCard
              key={"TODO_ITEM_" + index}
              title={item.title}
              detail={item.detail}
              id={item.id}
              completed={item.completed}
            />
          ))
        ) : (
          <EmptyState title={"You have no task"} />
        )}
      </div>
      <Link href="/add-todo" className={styles.addTodo}>
        <button>+</button>
      </Link>
      <BottomNavigation />
    </div>
  );
};

export default Home;
