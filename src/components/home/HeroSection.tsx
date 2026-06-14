import {
    Sparkles,
    Gift,
    Archive,
    Play,
    ArrowRight,
} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="mx-auto max-w-6xl px-6 pb-5 pt-20 lg:pt-15">
            <div className="grid items-center gap-16 lg:grid-cols-2">

                {/* Left */}
                <div className="max-w-2xl">

                    {/* Title */}
                    <h1 className="text-[36px] lg:text-[38px] leading-[1.4] tracking-tight text-neutral-900">
                        Cùng viết lời chúc lên một tấm thiệp chung và chia sẻ đến

                        <span className="flex flex-wrap items-end gap-1">
                            <span>người mình</span>

                            <img
                                src="/images/yeu-thuong.png"
                                alt="yêu thương"
                                className="relative top-[9px] h-[1.4em] w-auto"
                            />
                        </span>
                    </h1>

                    {/* Stats */}
                    <div className="mt-10 flex flex-col gap-5 pl-6">

                        <div className="flex items-start gap-3">
                            <Sparkles className="mt-[3px] h-5 w-5 text-[#FF9F29]" />
                            <div>
                                <div className="text-neutral-900">
                                    Tạo thiệp và mời bạn bè tham gia chỉ trong vài phút
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Gift className="mt-[3px] h-5 w-5 text-[#FF9F29]" />
                            <div>
                                <div className="text-neutral-900">
                                    Chia sẻ và xem thiệp online hoàn toàn miễn phí
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Archive className="mt-[3px] h-5 w-5 text-[#FF9F29]" />
                            <div>
                                <div className="text-neutral-900">
                                    Đặt in thiệp giấy chất lượng cao để tặng người thân yêu
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex items-center gap-4">
                        <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#2BC3E6] text-white font-semibold shadow-md hover:opacity-95">
                            Tạo thiệp chung
                            <ArrowRight className="h-4 w-4" />
                        </a>

                        <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[#2BC3E6] text-[#2BC3E6] font-semibold transition-colors duration-150 hover:bg-[#FF9F29] hover:border-[#FF9F29] hover:text-white">
                            <Play className="h-4 w-4" />
                            Xem mẫu
                        </a>
                    </div>

                </div>

                {/* Right */}
                <div className="relative">

                    {/* Hero Image */}
                    <div className="relative overflow-hidden bg-white shadow-2xl max-w-md mx-auto">

                        <img
                            src="/mockups/card1.jpg"
                            alt="Thiệp Chung"
                            className="w-full h-auto"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}