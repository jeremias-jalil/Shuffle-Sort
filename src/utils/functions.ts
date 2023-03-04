export const shuffleNumber = (array: number[]) =>
    [...array].sort(() => Math.random() - 0.5);

export const sortNumber = (array: number[]) =>
    [...array].sort((a, b) => a - b);

