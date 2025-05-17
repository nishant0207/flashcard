// src/components/StatsDashboard.tsx

import React from 'react';
import type { FlashcardData } from '../hooks/useDeck';

interface StatsDashboardProps {
    deck: FlashcardData[];
}

const StatsDashboard: React.FC<StatsDashboardProps> = ({ deck }) => {
    const knownCount = deck.filter((card) => card.known).length;
    const unknownCount = deck.length - knownCount;

    return (
        <div className="mt-4 p-4 bg-white rounded text-center dark:bg-gray-900">
            <p className="text-black font-semibold dark:text-white">Known: {knownCount}</p>
            <p className="text-black font-semibold dark:text-white">Don't Know: {unknownCount}</p>
        </div>
    );
};

export default StatsDashboard;