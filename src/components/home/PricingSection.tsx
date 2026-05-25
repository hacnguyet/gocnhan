export default function PricingSection() {
  return (
    <section className="mt-32 px-6">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-5xl font-bold tracking-tight text-neutral-900">
            Bảng giá
          </h2>

          <p className="mt-5 text-xl font-medium text-neutral-600">
            Chọn hình thức lưu giữ kỷ niệm phù hợp nhất 💌
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="relative rounded-[36px] bg-neutral-50 p-10">

            {/* Badge */}
            <div className="absolute -left-4 -top-4 rounded-2xl border-4 border-orange-400 bg-white px-4 py-3 text-lg font-bold text-orange-500">
              Phổ biến
            </div>

            <img
              src="/pricing/book.png"
              alt="Book"
              className="mx-auto h-[180px] object-contain"
            />

            <h3 className="mt-8 text-center text-3xl font-bold text-neutral-900">
              In sách kỷ niệm
            </h3>

            <p className="mt-3 text-center text-neutral-500">
              Gửi tận nơi dưới dạng album lưu niệm
            </p>

            <p className="mt-8 text-center text-5xl font-bold text-orange-500">
              299k
            </p>

            <p className="mt-2 text-center text-sm text-neutral-400">
              Đã bao gồm thiết kế cơ bản
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-[36px] bg-neutral-50 p-10">

            <img
              src="/pricing/pdf.png"
              alt="PDF"
              className="mx-auto h-[180px] object-contain"
            />

            <h3 className="mt-8 text-center text-3xl font-bold text-neutral-900">
              Tải PDF
            </h3>

            <p className="mt-3 text-center text-neutral-500">
              Tải ngay file chất lượng cao sau khi hoàn thành
            </p>

            <p className="mt-8 text-center text-5xl font-bold text-orange-500">
              59k
            </p>

            <p className="mt-2 text-center text-sm text-neutral-400">
              Không watermark
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-[36px] bg-neutral-50 p-10">

            <img
              src="/pricing/web.png"
              alt="Web"
              className="mx-auto h-[180px] object-contain"
            />

            <h3 className="mt-8 text-center text-3xl font-bold text-neutral-900">
              Góc nhắn online
            </h3>

            <p className="mt-3 text-center text-neutral-500">
              Chia sẻ bằng link với bạn bè và đồng nghiệp
            </p>

            <p className="mt-8 text-center text-5xl font-bold text-orange-500">
              Miễn phí
            </p>

            <p className="mt-2 text-center text-sm text-neutral-400">
              Lưu trữ trong 90 ngày
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">

          <button className="rounded-full bg-neutral-900 px-10 py-5 text-lg font-medium text-white transition hover:scale-105 hover:bg-black">
            Xem chi tiết bảng giá
          </button>

        </div>

      </div>
    </section>
  );
}