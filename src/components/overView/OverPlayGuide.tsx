import { cn } from "../../lib/utils";

interface OverPlayGuideComponent {
    overPlay: boolean;
    onClose: () => void;
}

function OverPlayGuide({ overPlay, onClose }: OverPlayGuideComponent) {
    return (
        <div
            className={cn(
                overPlay ? "flex" : "hidden",
                "h-full w-full inset-0 absolute bg-black/60 justify-center items-center"
            )}
        >
            {/* Guide */}
            <div className='w-[90%] md:w-[520px] h-[300px] md:h-[400px] xl:w-[580px] xl:h-[450px] p-5 md:p-8 xl:p-10 flex flex-col justify-center items-center gap-5 md:gap-10 bg-secondary/0 backdrop-blur-xs border-2 border-[#017111] rounded-2xl overflow-hidden'>
                <h1 className="text-2xl md:text-2xl xl:text-3xl font-bold text-[#5fcd6f] text-center uppercase">hướng dẫn thao tác</h1>
                {/* Icons */}
                <div className="flex w-full justify-center items-center gap-5">
                    <img src="/icons/hand_icon.png" alt="hand-icon" />
                    <p className="text-white text-sm md:text-base">hoặc</p>
                    <img src="/icons/mouse_icon.png" alt="mouse-icon" />
                </div>

                <p className="text-white text-sm md:text-xl px-10 md:px-16 text-center">Kéo sang trái hoặc phải để trải nghiệm toàn cảnh dự án</p>

                {/* Button */}
                <button onClick={onClose} className="w-max px-16 md:px-20 p-3 md:py-5 cursor-pointer z-10 bg-[#5fcd6f] rounded-2xl border-[#017111] border-3 hover:bg-white/85 hover:border-white drop-shadow-lg drop-shadow-white/0 hover:drop-shadow-white transition-all duration-300 overflow-hidden group">
                    <p className="text-white group-hover:text-[#428d4d] font-medium text-sm md:text-base uppercase w-full">Đã hiểu</p>
                </button>
            </div>

        </div>
    );
}

export default OverPlayGuide;
