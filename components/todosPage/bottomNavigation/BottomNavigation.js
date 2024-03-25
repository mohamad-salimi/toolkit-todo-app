"use client";
import React from "react";
import styles from "./BottomNavigation.module.css";
import Image from "next/image";
import tick from "../../../public/icons/tick.svg";
import playlist from "../../../public/icons/playlist.svg";
import Link from "next/link";

const BottomNavigation = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.filterButton} href={"/"}>
        <Image src={playlist} alt="playlist" />
        <p>All</p>
      </Link>
      <Link className={styles.filterButton} href={"/completed-task"}>
        <Image src={tick} alt="tick" />
        <p>Completed</p>
      </Link>
    </div>
  );
};

export default BottomNavigation;
