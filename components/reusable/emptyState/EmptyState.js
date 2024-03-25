import Image from "next/image";
import styles from "./EmptyState.module.css";
import tasks from "../../../public/icons/tasks.svg";
import React from "react";

const EmptyState = ({ title }) => {
  return (
    <div className={styles.container}>
      <Image src={tasks} alt="tasks" />
      <h3>{title}</h3>
    </div>
  );
};

export default EmptyState;
