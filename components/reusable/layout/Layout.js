"use client";
import React from "react";
import styles from "./Layout.module.css";
import Image from "next/image";
import arrowBack from "../../../public/icons/arrow-back.svg";
import { useRouter } from "next/navigation";

const Layout = ({ title }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Image
        src={arrowBack}
        alt="arrowBack"
        onClick={() => {
          router.back();
        }}
      />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Layout;
