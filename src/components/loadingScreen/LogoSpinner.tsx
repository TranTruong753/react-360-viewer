import React from "react";

function LogoSpinner() {
    return (
        <React.Fragment>
            {/* Logo */}
            <div className="relative w-auto h-auto flex justify-center items-center">
                <div className="w-80 h-80 md:w-[400px] md:h-[400px] border-3! rounded-full border-t-[#56FD6F]! border-r-[#95b493]! border-b-[#95b493]! border-l-[#95b493]! animate-spin-slow"></div>
                <img src='/logos/logo1.png' alt="Logo" className="absolute" />
            </div>
        </React.Fragment>
    );
}

export default LogoSpinner;