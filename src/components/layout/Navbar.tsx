export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-8 py-4">

        <nav className="flex items-center gap-20 text-base font-semibold text-neutral-800">

          <a
            href="#"
            className="font-logo text-5xl text-orange-500"
          >
            <div className="relative">
              Góc Nhắn

              <span className="absolute -bottom-3 -right-7 rotate-[-12deg] text-2xl">
                💌
              </span>
            </div>
          </a>

          <a
            href="#"
            className="transition hover:text-orange-500"
          >
            Tạo góc nhắn
          </a>

          <a
            href="#"
            className="transition hover:text-orange-500"
          >
            Hướng dẫn
          </a>

          <a
            href="#"
            className="transition hover:text-orange-500"
          >
            Giá cả
          </a>

          <a
            href="#"
            className="transition hover:text-orange-500"
          >
            Câu hỏi thường gặp
          </a>

          <button className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-orange-600">
            Đăng nhập
          </button>

        </nav>
      </div>
    </header>
  );
}
