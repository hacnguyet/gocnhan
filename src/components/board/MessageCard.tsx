"use client";

import { motion } from "framer-motion";

type MessageCardProps = {
  author: string;
  message: string;
  rotate?: string;
};

export default function MessageCard({
  author,
  message,
  rotate = "rotate-[-2deg]",
}: MessageCardProps) {
  return (
    <motion.div
      variants={
        {
          hidden: {
            opacity: 0,
            y: 30,
          },
          show: {
            opacity: 1,
            y: 0,
          },
        }
      }
      className={`${rotate} rounded-3xl bg-yellow-100 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition hover:rotate-0 hover:scale-105`}
    >
      <p className="text-lg leading-relaxed text-neutral-700">
        “{message}”
      </p>

      <div className="mt-4 text-right text-sm font-semibold text-neutral-500">
        — {author}
      </div>
    </motion.div>
  );
}
