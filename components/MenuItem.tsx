import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ title, link }: { title: string, link: string }) => {
  return (
    <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="py-5"
    >
        <Link
            href={ link }
            className="rounded hover:bg-gray-200 dark:hover:bg-gray-600 py-3 px-6"
        >
            { title }
        </Link>
    </motion.li>
  );
};
