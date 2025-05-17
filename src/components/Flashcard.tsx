// src/components/Flashcard.tsx

import React from 'react';
import FlipCard from './FlipCard';
import type { FlashcardData } from '../hooks/useDeck';

interface FlashcardProps {
    card: FlashcardData;
}

const FlashcardComponent: React.FC<FlashcardProps> = ({ card }) => {
    return (
        <div className="mt-8 flex justify-center px-4 text-black">
            <FlipCard front={card.front} back={card.back} />
        </div>
    );
};

export default FlashcardComponent;