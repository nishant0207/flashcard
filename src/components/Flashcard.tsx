// src/components/Flashcard.tsx

import React from 'react';
import FlipCard from './FlipCard';
import type { FlashcardData } from '../hooks/useDeck';

interface FlashcardProps {
    card: FlashcardData;
    onKnow: () => void;
    onDontKnow: () => void;

}

const FlashcardComponent: React.FC<FlashcardProps> = ({ card, onKnow, onDontKnow }) => {
    return (
        <div className="mt-8 flex flex-col items-center px-4 text-black">
            <FlipCard
                front={card.front}
                back={card.back}
                onKnow={onKnow}
                onDontKnow={onDontKnow}
                difficulty={card.difficulty}
            />
            <div className="mt-10 flex justify-center gap-4 w-full max-w-sm">
                <button
                    onClick={onKnow}
                    className="w-1/2 px-4 py-2 rounded bg-green-700 text-white dark:bg-green-600 transition"
                >
                    Know
                </button>
                <button
                    onClick={onDontKnow}
                    className="w-1/2 px-4 py-2 rounded bg-red-700 text-white dark:bg-red-600 transition"
                >
                    Don't Know
                </button>
            </div>
        </div>
    );
};

export default FlashcardComponent;