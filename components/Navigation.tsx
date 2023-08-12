import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

// header data
const HeaderData = [
    {
        title : 'Home',
        link : '/',            
    },
    {
        title : 'blogs',
        link : '/blogs',            
    },
    {
        title : 'Jobs🔥',
        link : '/jobs',            
    },
    {
        title : 'Users',
        link : '/users',            
    },
]

export const Navigation = () => (
    <motion.ul
        variants={variants}
        className="py-8 lg:px-10 absolute top-10 w-60"
    >
    { HeaderData.map((value, key) => (
        <MenuItem
            title={ value.title }
            link={ value.link }
            key={ key }
        />
    )) }
  </motion.ul>
);