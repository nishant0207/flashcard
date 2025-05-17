// src/components/FlipCard.tsx

import React, { useState, useEffect } from 'react';

interface FlipCardProps {
    front: string;
    back: string;
    onKnow: () => void;
    onDontKnow: () => void;
    difficulty?: 'easy' | 'medium' | 'hard';
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, difficulty }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        setFlipped(false);
    }, [front, back]);

    const flip = () => {
        console.log("card flipped");
        setFlipped(!flipped);
    }

    return (
        <div
            className="w-full max-w-sm aspect-[3.5/3] perspective cursor-pointer"
            onClick={flip}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out transform transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
            >
                <div
                    className="absolute w-full h-full backface-hidden bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-gray-700 backdrop-blur-md rounded-xl shadow-md flex items-center justify-center text-lg font-semibold p-6 text-gray-900 dark:text-white">
                    {front}
                    <span
                        className={`absolute top-3 left-4 w-5 h-5 rounded-full shadow-inner shadow-black/40`}></span>

                    <span
                        className={`absolute top-3 right-4 w-5 h-5 rounded-full ${
                            difficulty === 'easy' ? 'bg-green-500' :
                                difficulty === 'medium' ? 'bg-yellow-500' :
                                    difficulty === 'hard' ? 'bg-red-500' :
                                        'bg-gray-400'
                        } shadow-inner shadow-black/40`}></span>
                </div>
                <div
                    className="absolute w-full h-full rotate-y-180 transform backface-hidden bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-gray-700 backdrop-blur-md rounded-xl shadow-md flex flex-col items-center justify-center text-lg font-semibold p-6 text-gray-900 dark:text-white">
                    {back}
                    <span
                        className={`absolute top-3 right-4 w-5 h-5 rounded-full shadow-inner shadow-black/40`}></span>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;