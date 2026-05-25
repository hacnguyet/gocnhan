"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MessageCard from "@/components/board/MessageCard";
import TemplateSlider from "@/components/slider/TemplateSlider";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden from-orange-50 via-pink-50 to-yellow-50">

      {/* Background Blobs */}
      <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-pink-200 opacity-40 blur-3xl" />

      <div className="absolute right-[-120px] top-[200px] h-[350px] w-[350px] rounded-full bg-orange-200 opacity-40 blur-3xl" />

      <div className="absolute bottom-[-100px] left-[30%] h-[250px] w-[250px] rounded-full bg-yellow-200 opacity-40 blur-3xl" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-28 pb-32 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >

          {/* Categories */}
          <div className="mb-6 flex flex-nowrap items-center justify-center gap-3 overflow-x-auto text-sm font-medium">

            <button className="whitespace-nowrap rounded-full bg-orange-500 px-4 py-2 text-white shadow">
              Tất cả góc nhắn
            </button>

            <button className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-neutral-700 shadow-sm transition hover:bg-orange-100">
              Góc nhắn theo mùa
            </button>

            <button className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-neutral-700 shadow-sm transition hover:bg-orange-100">
              Góc nhắn mừng sinh nhật
            </button>

            <button className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-neutral-700 shadow-sm transition hover:bg-orange-100">
              Góc nhắn mừng đám cưới
            </button>

            <button className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-neutral-700 shadow-sm transition hover:bg-orange-100">
              Góc nhắn chia tay
            </button>

          </div>

          {/* Template Slider */}
          <TemplateSlider />

          {/* Description */}
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            Tạo thiệp nhóm online để gửi lời chúc, lời cảm ơn
            và những kỷ niệm đáng nhớ dành cho bạn bè,
            đồng nghiệp và người thân yêu.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button className="rounded-full bg-orange-500 px-8 py-4 text-lg font-medium text-white transition hover:scale-105 hover:bg-orange-600">
              Tạo góc nhắn
            </button>

            <button className="rounded-full border border-neutral-300 bg-white px-8 py-4 text-lg font-medium transition hover:bg-neutral-100">
              Xem demo
            </button>

          </div>
        </motion.div>

        {/* Message Cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mt-24 grid max-w-5xl gap-6 md:grid-cols-3"
        >

          <MessageCard
            author="Minh"
            message="Cảm ơn bạn vì đã luôn đồng hành cùng team ❤️"
            rotate="rotate-[-3deg]"
          />

          <MessageCard
            author="Lan"
            message="Chúc bạn thật nhiều thành công ở hành trình mới ✨"
            rotate="rotate-[2deg]"
          />

          <MessageCard
            author="Huy"
            message="Mãi nhớ những buổi ăn trưa cùng nhau 😄"
            rotate="rotate-[-1deg]"
          />

        </motion.div>
      </section>
    </main>
  );
}