"use client"

import { usePathname } from "next/navigation";
import React from "react";
import classes from './nav-link.module.css'
import Link from "next/link";

const Navlink = ({href,children}) => {
    const path=usePathname()
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.link}  ${classes.active}` : undefined}
    >
    {children}
    </Link>
  );
};

export default Navlink;
