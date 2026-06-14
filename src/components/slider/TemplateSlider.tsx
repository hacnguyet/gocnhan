"use client";

import { useState } from "react";

const categories = [
  "Sinh nhật",
  "Chia tay đồng nghiệp",
  "Tốt nghiệp",
  "Tri ân thầy cô",
  "Đám cưới",
  "Bé yêu",
  "Khác",
];

const cards = [
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card2.jpg", category: "Sinh nhật" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card3.jpg", category: "Chia tay đồng nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card4.jpg", category: "Tốt nghiệp" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Tri ân thầy cô" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Đám cưới" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Bé yêu" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" },
  { image: "/cards/card1.jpg", category: "Khác" }
];

export default function TemplateSlider() {
  const [active, setActive] = useState<string>(categories[0]);

  const filtered = cards.filter((c) => c.category === active);

  return (
    <section className="mt-12 w-full">
      <div className="mx-auto max-w-[1500px] px-4">
        <h2 className="text-center text-4xl mb-3">Dành cho mọi dịp đặc biệt</h2>
        <p className="text-center text-lg text-neutral-500 mb-6">Hơn 300 mẫu thiết kế độc đáo!</p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors duration-150 ${
                  active === cat
                    ? "bg-[#FF9F29] border-1 border-[#FF9F29] text-white"
                    : "border-1 border-[#2BC3E6] text-[#2BC3E6] bg-transparent hover:bg-[#FF9F29] hover:border-[#FF9F29] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 mx-auto justify-items-center mb-6">
          {filtered.map((card, idx) => (
              <div key={idx} className="max-w-[240px] w-full group flex items-center justify-center transition duration-200 ease-out hover:-translate-y-2 hover:shadow-lg border-2 border-transparent hover:border-[rgb(216,206,224)] bg-[#f5f3f8] p-5">
                <div className="relative w-full overflow-hidden bg-white mx-auto">
                  <img src={card.image} alt={card.category} className="w-full h-full border-1 border-[#2BC3E6] object-cover block transition duration-200 ease-out group-hover:brightness-105" />
                </div>
              </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors duration-150 border border-[#2BC3E6] text-[#2BC3E6] bg-transparent hover:bg-[#FF9F29] hover:border-[#FF9F29] hover:text-white">
            Xem tất cả mẫu
          </button>
        </div>
      </div>
    </section>
  );
}
