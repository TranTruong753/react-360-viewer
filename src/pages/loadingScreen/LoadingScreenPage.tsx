import React from "react";
import { useNavigate } from "react-router";
import BackgroundLayer from "../../components/loadingScreen/BackgroundLayer";
import LogoSpinner from "../../components/loadingScreen/LogoSpinner";
import StartButton from "../../components/loadingScreen/StartButton";

function LoadingScreenPage() {
    const navigate = useNavigate();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            return navigate('/overview')
        }, 5000)

        return () => clearTimeout(timer);
    }, [navigate])

    return (
        <div className="relative h-screen w-full flex flex-col gap-5 md:gap-10 justify-center items-center">
            <BackgroundLayer />
            {/* Logo */}
            <LogoSpinner />
            {/* Button */}
            <StartButton />
        </div>
    );
}

export default LoadingScreenPage;