import Head from "next/head";
import React from "react";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs" + keywords}></meta>
        <title>Next js</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Список пользователей" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
