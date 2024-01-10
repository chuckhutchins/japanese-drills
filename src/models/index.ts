export type Drills = {
    id: string,
    name: string,
    description: string,
    exercises: Exercise[],
};

export type Exercise = {
    english: string,
    japanese: string,
    kanji: string,
};