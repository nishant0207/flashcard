import React from 'react';
import Flashcard from './components/Flashcard';
import KnowButtons from './components/KnowButtons';
import ProgressBar from './components/ProgressBar';
import StatsDashboard from './components/StatsDashboard';
import { useDeck } from './hooks/useDeck';

const App: React.FC = () => {
    const { currentCard, markAsKnown, markAsUnknown, currentIndex, deck, isDone } = useDeck();

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };


    return (
        <>
            <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-center px-4 py-8 dark:bg-gray-900">
                <button
                    onClick={toggleDarkMode}
                    className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition"
                >
                    Toggle Dark Mode
                </button>
                <div className="w-full max-w-2xl p-6 bg-white text-black rounded-lg dark:text-white dark:bg-gray-900">
                    <h1 className="text-3xl font-bold text-center mb-6  black:text-white">Flashcard Viewer</h1>

                    <ProgressBar current={currentIndex + 1} total={deck.length}/>

                    {!isDone && currentCard ? (
                        <>
                            <Flashcard card={currentCard}/>
                            <KnowButtons onKnow={markAsKnown} onDontKnow={markAsUnknown}/>
                        </>
                    ) : (
                        <div className="mt-10 text-center space-y-4">
                            <p className="text-2xl font-semibold text-black dark:text-white">You're done! 🎉</p>
                            <p className="text-black dark:text-white">You’ve completed all the flashcards.</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-2 px-5 py-2 bg-black text-white rounded-md transition dark:bg-white dark:text-black"
                            >
                                Restart
                            </button>
                        </div>
                    )}

                    <StatsDashboard deck={deck}/>
                </div>
            </div>
        </>
    );
};

export default App;