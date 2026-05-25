export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-white px-6 py-14">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

        {/* Left */}
        <div>

          <div className="relative inline-block text-3xl font-bold tracking-tight text-neutral-900">

            Góc Nhắn

            <span className="absolute -bottom-3 -right-7 rotate-[-12deg] text-2xl">
              💌
            </span>

          </div>

          <p className="mt-4 max-w-md leading-relaxed text-neutral-500">
            Tạo thiệp nhóm online để lưu giữ những lời chúc,
            lời cảm ơn và các kỷ niệm đáng nhớ cùng bạn bè,
            đồng nghiệp và người thân yêu.
          </p>

        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-4 text-sm text-neutral-500 md:items-end">

          <div className="flex flex-wrap justify-center gap-6 md:justify-end">

            <a
              href="#"
              className="transition hover:text-neutral-900"
            >
              Chính sách bảo mật
            </a>

            <a
              href="#"
              className="transition hover:text-neutral-900"
            >
              Chính sách cookie
            </a>

            <a
              href="#"
              className="transition hover:text-neutral-900"
            >
              Điều khoản sử dụng
            </a>

            <a
              href="#"
              className="transition hover:text-neutral-900"
            >
              Liên hệ
            </a>

          </div>

          <p className="text-center md:text-right">
            Copyright © Góc Nhắn. ALL RIGHTS RESERVED.
          </p>

        </div>

      </div>

    </footer>
  );
}