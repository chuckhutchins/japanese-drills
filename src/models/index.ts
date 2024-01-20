export type Drills = {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
};

export type Exercise = {
  english: string;
  japanese: string;
  kanji: string;
};

export type Settings = {
  cycle: string;
  order: string;
  type: string;
}

export type User = {
  birthday: Date;
  createdDate: Date;
  email: string;
  name: string;
  username: string;
};

export type MaybeUser = User | undefined;
