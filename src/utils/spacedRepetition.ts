// src/utils/spacedRepetition.ts

/**
 * Calculates the number of days until the next review based on how many times the user got it right.
 */
export const getNextReviewInterval = (successCount: number): number => {
    const intervals = [1, 3, 7, 14, 30]; // in days
    return intervals[Math.min(successCount, intervals.length - 1)];
};