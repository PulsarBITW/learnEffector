import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

type LinkListType = {
  to: string;
  name: string;
  id?: number | string;
};

const LinksList: LinkListType[] = [
  {
    to: "/",
    name: "HomePage",
  },
  { to: "/firstStore", name: "FirstStore" },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        {LinksList.map((el) => (
          <li key={el.to}>
            <Link to={el.to}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
