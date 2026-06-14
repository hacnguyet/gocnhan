import {
  PencilLine,
  Link2,
  Heart,
  BookOpen,
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "Bước 1",
      title: "Chọn mẫu thiệp",
      desc: "Chọn thiết kế bạn thích và bắt đầu tạo thiệp mới.",
      image: "/steps/step1.jpg",
    },
    {
      step: "Bước 2",
      title: "Viết lời nhắn & chia sẻ",
      desc: "Viết lời nhắn và gửi link mời bạn bè cùng tham gia.",
      image: "/steps/step2.jpg",
    },
    {
      step: "Bước 3",
      title: "Thu thập lời nhắn",
      desc: "Kiểm tra lời nhắn và hoàn tất nội dung để gửi đi.",
      image: "/steps/step3.jpg",
    },
    {
      step: "Bước 4",
      title: "Xem online hoặc in",
      desc: "Xem online miễn phí hoặc đặt in để nhận thiệp chất lượng cao.",
      image: "/steps/step4.jpg",
    },
  ];

  return (
    <section className="mt-12 w-full">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl mb-10 mt-20">Cách hoạt động</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-lg text-[#2BC3E6] mb-3">{s.step}</div>
              <div className="mx-auto mb-4 w-full max-w-[260px]">
                <div className="overflow-hidden rounded-md bg-white shadow-sm">
                  <img src={s.image} alt={s.title} className="w-full h-40 object-cover block" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}