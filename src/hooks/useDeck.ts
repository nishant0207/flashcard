// src/hooks/useDeck.ts

import { useState } from 'react';

export interface FlashcardData {
    id: number;
    front: string;
    back: string;
    known: boolean;
}

const initialDeck: FlashcardData[] = [
    { id: 1, front: "What is React?", back: "A JavaScript library for building user interfaces.", known: false },
    { id: 2, front: "What is JSX?", back: "A syntax extension that looks like HTML and is used with React.", known: false },
    { id: 3, front: "What is a component in React?", back: "A reusable piece of UI defined as a function or class.", known: false },
    { id: 4, front: "What is the difference between a functional and a class component?", back: "Functional uses hooks, class uses lifecycle methods.", known: false },
    { id: 5, front: "What are props in React?", back: "Inputs passed from a parent to a child component.", known: false },
    { id: 6, front: "What is state in React?", back: "A local data storage for a component that triggers re-render when changed.", known: false },
    { id: 7, front: "What does useState do?", back: "It allows functional components to have state.", known: false },
    { id: 8, front: "What is useEffect used for?", back: "To perform side effects like fetching data or subscriptions.", known: false },
    { id: 9, front: "What is virtual DOM?", back: "A lightweight JS object representing the real DOM for efficient diffing.", known: false },
    { id: 10, front: "What is the key prop used for?", back: "To uniquely identify list items to help with re-rendering.", known: false },
    // { id: 11, front: "What is a hook in React?", back: "A function that lets you use state and lifecycle in functional components.", known: false },
    // { id: 12, front: "What are controlled components?", back: "Form elements that derive their value from state.", known: false },
    // { id: 13, front: "What is React Router used for?", back: "To handle client-side routing in a React app.", known: false },
    // { id: 14, front: "What does useContext do?", back: "It allows a component to consume global context data.", known: false },
    // { id: 15, front: "How to lift state up in React?", back: "Move state to a common ancestor to share it among children.", known: false },
    // { id: 16, front: "What is the difference between props and state?", back: "Props are read-only, state is local and mutable.", known: false },
    // { id: 17, front: "How does React handle rendering performance?", back: "With virtual DOM, diffing, and batching updates.", known: false },
    // { id: 18, front: "What is the default behavior of a React event handler?", back: "It does not call preventDefault unless explicitly done.", known: false },
    // { id: 19, front: "What does useRef do?", back: "It provides a mutable ref that persists across renders.", known: false },
    // { id: 20, front: "What is useMemo used for?", back: "To memoize expensive calculations between renders.", known: false },
    // { id: 21, front: "What is React.memo?", back: "A higher-order component that prevents re-rendering if props don't change.", known: false },
    // { id: 22, front: "What are fragments in React?", back: "A way to group multiple elements without adding extra DOM nodes.", known: false },
    // { id: 23, front: "How to conditionally render in React?", back: "Using ternary operators or logical && expressions.", known: false },
    // { id: 24, front: "What is the role of keys in lists?", back: "To help React identify which items changed.", known: false },
    // { id: 25, front: "What are portals in React?", back: "Render children into a different DOM subtree.", known: false },
    // { id: 26, front: "What is React.StrictMode?", back: "A tool for highlighting potential problems in an app.", known: false },
    // { id: 27, front: "What is server-side rendering (SSR)?", back: "Rendering React components to HTML on the server.", known: false },
    // { id: 28, front: "What is hydration in React?", back: "Attaching event listeners to SSR content.", known: false },
    // { id: 29, front: "What are custom hooks?", back: "Reusable logic built using existing hooks.", known: false },
    // { id: 30, front: "What is useCallback used for?", back: "To memoize functions so they don’t get re-created on each render.", known: false },
    // { id: 31, front: "How does reconciliation work?", back: "React compares virtual DOM trees to apply minimal changes.", known: false },
    // { id: 32, front: "What are synthetic events?", back: "React's cross-browser wrapper for native events.", known: false },
    // { id: 33, front: "How do you fetch data in React?", back: "With fetch/axios in useEffect or data fetching libraries.", known: false },
    // { id: 34, front: "What is useReducer?", back: "An alternative to useState for managing complex state logic.", known: false },
    // { id: 35, front: "How to handle form validation in React?", back: "Using controlled components or libraries like Formik.", known: false },
    // { id: 36, front: "What is suspense in React?", back: "A way to handle async components or data fetching.", known: false },
    // { id: 37, front: "What is concurrent mode?", back: "A React mode for interruptible rendering.", known: false },
    // { id: 38, front: "What is the difference between mount and update?", back: "Mount: first render; Update: any re-render afterward.", known: false },
    // { id: 39, front: "How do you debug React apps?", back: "With React DevTools and console.log/debugger.", known: false },
    // { id: 40, front: "What is the useLayoutEffect hook?", back: "It runs synchronously after all DOM mutations.", known: false },
    // { id: 41, front: "How do you test React components?", back: "With Jest, React Testing Library or Enzyme.", known: false },
    // { id: 42, front: "What is a higher-order component (HOC)?", back: "A function that takes a component and returns a new one.", known: false },
    // { id: 43, front: "Can you nest hooks?", back: "No, hooks must be called in the top level of a component.", known: false },
    // { id: 44, front: "What is the rules of hooks?", back: "Hooks must be called unconditionally and only in React functions.", known: false },
    // { id: 45, front: "What is the context API?", back: "It allows you to pass data deeply without prop drilling.", known: false },
    // { id: 46, front: "What is prop drilling?", back: "Passing data through many layers of components.", known: false },
    // { id: 47, front: "What is React Native?", back: "A framework for building native apps using React.", known: false },
    // { id: 48, front: "What is a render prop?", back: "A technique where a prop is a function that returns JSX.", known: false },
    // { id: 49, front: "Why is immutability important in React?", back: "To ensure proper change detection and re-rendering.", known: false },
    // { id: 50, front: "What is Node.js?", back: "A JavaScript runtime built on Chrome's V8 engine.", known: false },
    // { id: 51, front: "What is the event loop in Node.js?", back: "It handles asynchronous operations in a non-blocking way.", known: false },
    // { id: 52, front: "What is npm?", back: "Node package manager, used to install packages.", known: false },
    // { id: 53, front: "What is a callback function?", back: "A function passed as an argument and executed later.", known: false },
    // { id: 54, front: "What is a promise?", back: "An object representing the eventual completion of an async task.", known: false },
    // { id: 55, front: "What is async/await?", back: "Syntactic sugar over promises to handle async code more readably.", known: false },
    // { id: 56, front: "What is the purpose of package.json?", back: "To manage metadata and dependencies of a Node project.", known: false },
    // { id: 57, front: "How do you create a simple server in Node?", back: "`http.createServer()` from the http module.", known: false },
    // { id: 58, front: "What is Express.js?", back: "A minimalist web framework for Node.js.", known: false },
    // { id: 59, front: "What is middleware in Express?", back: "Functions that handle requests before final route handler.", known: false },
    // { id: 60, front: "What is the difference between PUT and PATCH?", back: "PUT replaces, PATCH updates partially.", known: false },
];

export const useDeck = () => {
    const [deck, setDeck] = useState<FlashcardData[]>(initialDeck);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const currentCard = currentIndex < deck.length ? deck[currentIndex] : null;
    const isDone = currentIndex >= deck.length;

    const markAsKnown = () => {
        updateCard(true);
    };

    const markAsUnknown = () => {
        updateCard(false);
    };

    const updateCard = (known: boolean) => {
        const updatedDeck = deck.map((card, i) =>
            i === currentIndex ? { ...card, known } : card
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
    };
};