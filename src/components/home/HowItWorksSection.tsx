export default function HowItWorksSection() {
  return (
    <section className="mt-32 bg-neutral-50 px-6 py-24">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-5xl font-bold tracking-tight text-neutral-900">
            Cách hoạt động
          </h2>

          <p className="mt-5 text-xl font-medium text-neutral-600">
            Chỉ với vài bước đơn giản để tạo nên một góc nhắn đầy kỷ niệm 💌
          </p>

        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="relative text-center">

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[96px] font-bold text-neutral-200">
              01
            </div>

            <img
              src="/steps/step1.png"
              alt="Chọn mẫu"
              className="relative z-10 mx-auto h-[180px] object-contain"
            />

            <h3 className="mt-8 text-3xl font-bold text-neutral-900">
              Chọn mẫu thiệp
            </h3>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Chọn phong cách phù hợp với sinh nhật, đám cưới,
              chia tay hoặc lời cảm ơn.
            </p>

          </div>

          {/* Step 2 */}
          <div className="relative text-center">

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[96px] font-bold text-neutral-200">
              02
            </div>

            <img
              src="/steps/step2.png"
              alt="Thu thập lời nhắn"
              className="relative z-10 mx-auto h-[180px] object-contain"
            />

            <h3 className="mt-8 text-3xl font-bold text-neutral-900">
              Thu thập lời nhắn
            </h3>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Gửi link cho bạn bè, đồng nghiệp hoặc người thân cùng tham gia.
            </p>

          </div>

          {/* Step 3 */}
          <div className="relative text-center">

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[96px] font-bold text-neutral-200">
              03
            </div>

            <img
              src="/steps/step3.png"
              alt="Tùy chỉnh"
              className="relative z-10 mx-auto h-[180px] object-contain"
            />

            <h3 className="mt-8 text-3xl font-bold text-neutral-900">
              Tùy chỉnh góc nhắn
            </h3>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Sắp xếp hình ảnh, lời chúc và thiết kế theo cách riêng của bạn.
            </p>

          </div>

          {/* Step 4 */}
          <div className="relative text-center">

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-[96px] font-bold text-neutral-200">
              04
            </div>

            <img
              src="/steps/step4.png"
              alt="Chia sẻ"
              className="relative z-10 mx-auto h-[180px] object-contain"
            />

            <h3 className="mt-8 text-3xl font-bold text-neutral-900">
              Chia sẻ kỷ niệm
            </h3>

            <p className="mt-4 leading-relaxed text-neutral-500">
              Gửi online, tải PDF hoặc in thành album lưu niệm thật đẹp.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}