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
        <div className="mt-8 flex justify-center px-4 text-black">
            <FlipCard front={card.front} back={card.back} onKnow={onKnow} onDontKnow={onDontKnow} />
        </div>
    );
};

export default FlashcardComponent;