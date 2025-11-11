import React from "react";

function BackgroundLayer() {
    return (
        <React.Fragment>
            {/* Image background */}
            <div className=" w-full h-full absolute  bg-[url(/images/bgLoading.jpg)] bg-cover bg-center bg-no-repeat"></div>

            {/* Over play */}
            <div className="bg-[radial-gradient(circle,_rgba(96,161,21,0.5)_0%,_rgba(6,24,0,0.5)_0%)] w-full h-full absolute backdrop-blur-sm"></div>

        </React.Fragment>
    );
}

export default BackgroundLayer;