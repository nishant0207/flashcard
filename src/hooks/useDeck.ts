// src/hooks/useDeck.ts

import { useState } from 'react';

export interface FlashcardData {
    id: number;
    front: string;
    back: string;
    known: boolean;
    knownStreak?: number;
    difficulty?: 'easy' | 'medium' | 'hard';
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const initialDeck: FlashcardData[] = [
    { id: 1, front: "What is React?", back: "A JavaScript library for building user interfaces.", known: false, difficulty: 'easy' },
    { id: 2, front: "What is JSX?", back: "A syntax extension that looks like HTML and is used with React.", known: false, difficulty: 'medium' },
    { id: 3, front: "What is a component in React?", back: "A reusable piece of UI defined as a function or class.", known: false, difficulty: 'easy' },
    { id: 4, front: "What is the difference between a functional and a class component?", back: "Functional uses hooks, class uses lifecycle methods.", known: false, difficulty: 'hard' },
    { id: 5, front: "What are props in React?", back: "Inputs passed from a parent to a child component.", known: false, difficulty: 'easy' },
    { id: 6, front: "What is state in React?", back: "A local data storage for a component that triggers re-render when changed.", known: false, difficulty: 'medium' },
    { id: 7, front: "What does useState do?", back: "It allows functional components to have state.", known: false, difficulty: 'easy' },
    { id: 8, front: "What is useEffect used for?", back: "To perform side effects like fetching data or subscriptions.", known: false, difficulty: 'medium' },
    { id: 9, front: "What is virtual DOM?", back: "A lightweight JS object representing the real DOM for efficient diffing.", known: false, difficulty: 'hard' },
    { id: 10, front: "What is the key prop used for?", back: "To uniquely identify list items to help with re-rendering.", known: false, difficulty: 'medium' },

];

export const useDeck = () => {
    const [deck, setDeck] = useState<FlashcardData[]>(() => shuffleArray(initialDeck));
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [startTime] = useState(() => Date.now());

    const currentCard = currentIndex < deck.length ? deck[currentIndex] : null;
    const isDone = currentIndex >= deck.length;
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // in seconds

    const markAsKnown = () => {
        updateCard(true);
    };

    const markAsUnknown = () => {
        updateCard(false);
    };

    const updateCard = (known: boolean) => {
        const updatedDeck = deck.map((card, index) =>
            index === currentIndex
                ? {
                    ...card,
                    known,
                    knownStreak: known
                        ? (card.knownStreak || 0) + 1
                        : 0,
                  }
                : card
        );

        setDeck(updatedDeck);
        goToNextCard();
    };

    const goToNextCard = () => {
        if (currentIndex < deck.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return {
        deck,
        currentCard,
        markAsKnown,
        markAsUnknown,
        currentIndex,
        isDone,
        elapsedTime,
    };
};