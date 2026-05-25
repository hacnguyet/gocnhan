"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const cards = [
    {
        image: "/cards/card1.jpg",
        title: "Happy Birthday",
    },
    {
        image: "/cards/card2.jpg",
        title: "Wedding Wishes",
    },
    {
        image: "/cards/card3.jpg",
        title: "Farewell Memories",
    },
    {
        image: "/cards/card4.jpg",
        title: "Giáng Sinh Ấm Áp",
    },
    {
        image: "/cards/card5.jpg",
        title: "Happy New Year",
    },
    {
        image: "/cards/card6.jpg",
        title: "Thank You",
    },
    {
        image: "/cards/card7.jpg",
        title: "Team Memories",
    },
    {
        image: "/cards/card8.jpg",
        title: "Best Friends",
    },
    {
        image: "/cards/card9.jpg",
        title: "Love Notes",
    },
    {
        image: "/cards/card10.jpg",
        title: "Congratulations",
    },
];

export default function TemplateSlider() {
    return (
        <div className="relative mt-12 px-4 right-4">

            {/* Left Arrow */}
            <button className="swiper-button-prev-custom absolute left-16 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-black/35 transition duration-300 hover:scale-110 hover:bg-black/45">
                <ChevronLeft className="m-auto h-6 w-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button className="swiper-button-next-custom absolute right-7 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-black/35 transition duration-300 hover:scale-110 hover:bg-black/45">
                <ChevronRight className="m-auto h-6 w-6 text-white" />
            </button>

            <Swiper
                style={{
                    padding: "0 10px 0 45px",
                }}
                modules={[Autoplay, Navigation]}
                navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={50}
                slidesPerView={5}
                grabCursor={true}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>

                        <div className="overflow-visible py-6">
                            <div className="transition-all duration-500 ease-out hover:scale-110">

                                <div className="relative">

                                    {/* Shadow */}
                                    <div
                                        className="pointer-events-none absolute bottom-9 left-[-65px] z-[-1] h-[40px] w-[160px] bg-contain bg-bottom bg-no-repeat opacity-70"
                                        style={{
                                            backgroundImage: "url('/shadow/carousel_shadow.svg')",
                                        }}
                                    />

                                    {/* Image */}
                                    <div className="overflow-hidden rounded-none">
                                        <img
                                            src={card.image}
                                            alt="Template Card"
                                            className="aspect-square w-full object-cover"
                                        />
                                    </div>

                                    {/* Title */}
                                    <p className="mt-4 text-center text-sm font-medium tracking-wide text-neutral-700">
                                        {card.title}
                                    </p>

                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}