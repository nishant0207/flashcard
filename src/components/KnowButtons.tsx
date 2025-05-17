// src/components/KnowButtons.tsx

import React from 'react';

interface KnowButtonsProps {
  onKnow: () => void;
  onDontKnow: () => void;
}

const KnowButtons: React.FC<KnowButtonsProps> = ({ onKnow, onDontKnow }) => {
  return (
    <div className="mt-10 flex justify-center gap-6">
      <button
        onClick={onKnow}
        className="px-6 py-2 rounded-lg bg-black text-white font-medium shadow transition dark:bg-white dark:text-black"
      >
        ✅ Know
      </button>
      <button
        onClick={onDontKnow}
        className="px-6 py-2 rounded-lg bg-black text-white font-medium shadow transition dark:bg-white dark:text-black"
      >
        ❌ Don’t Know
      </button>
    </div>
  );
};

export default KnowButtons;