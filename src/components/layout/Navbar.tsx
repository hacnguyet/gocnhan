export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-8xl items-center px-8 py-4">
          <nav className="flex items-center w-full">
            <div className="hidden md:flex items-center mx-auto text-sm md:text-base font-medium text-neutral-700">
              <div className="flex gap-15">
                <div className="flex items-center">
                  <a href="#" className="inline-flex items-center gap-3" aria-label="Thiệp Chung">
                    <span className="text-3xl font-semibold leading-none">
                      <span className="text-[#2BC3E6]">Thiệp</span>
                      <span className="text-[#FF9F29]">Chung.vn</span>
                    </span>
                  </a>
                </div>
                <a href="#" className="inline-flex items-center h-10 px-2 rounded hover-rgb-551a8b">Tạo góc nhắn</a>
                <a href="#" className="inline-flex items-center h-10 px-2 rounded hover-rgb-551a8b">Hướng dẫn</a>
                <a href="#" className="inline-flex items-center h-10 px-2 rounded hover-rgb-551a8b">Giá cả</a>
                <a href="#" className="inline-flex items-center h-10 px-2 rounded hover-rgb-551a8b">Câu hỏi thường gặp</a>
                <a href="#" className="inline-flex items-center h-10 px-2 rounded hover-rgb-551a8b">Blog</a>
                <a href="#" className="inline-flex items-center h-10 px-2 rounded hover-rgb-551a8b">Đăng nhập/Tạo tài khoản</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Secondary category bar (not fixed) so it scrolls with the page */}
      <div className="border-t border-gray-100 bg-[#f6f8fa]">
        <div className="mx-auto max-w-7xl px-8 py-3 text-base md:text-lg text-neutral-700 flex items-center justify-center gap-6 overflow-x-auto">
          <a href="#" className="whitespace-nowrap px-2 py-1 rounded hover-rgb-551a8b">Khuyến mãi đặc biệt nhân dịp ngày Nhà giáo Việt Nam, giảm ngay 20% cho mỗi đơn hàng đặt in!</a>
        </div>
      </div>
    </>
  );
}
