import React from "react";
import { useNavigate } from "react-router";

function StartButton() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <button onClick={() => navigate('/overview')} className="w-max px-16 md:px-20 p-3 md:py-5 cursor-pointer z-10 bg-[#5fcd6f] rounded-2xl border-[#017111] border-3 hover:bg-white/85 hover:border-white drop-shadow-lg drop-shadow-white/0 hover:drop-shadow-white transition-all duration-300 overflow-hidden group">
                <p className="text-white group-hover:text-[#428d4d] font-medium text-sm md:text-base uppercase w-full">Bắt đầu</p>
            </button>
        </React.Fragment>
    );
}

export default StartButton;