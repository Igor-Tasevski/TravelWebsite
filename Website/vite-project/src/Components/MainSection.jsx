import React from 'react'
import MainButton from './Main_Button'
import MainButton_1 from './MainButton_1'

const MainSection = () => {
    return (
        <div className="relative">
            {/* Video background */}
            <video
                src="/videos/video-7.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col text-center text-white px-4 py-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Let's explore new horizons
                </h1>
                <p className="text-lg mb-6">What are you waiting for?</p>

                {/* Buttons container */}
                <div className="flex space-x-4">
                    <MainButton />
                    <MainButton_1 />
                </div>
            </div>
        </div>
    )
}

export default MainSection
