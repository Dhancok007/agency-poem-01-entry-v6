// agency-poem-01 entry — "the fox is mine"
// A father delegates the bills, trains and landlord to his agent,
// which can also perform the bedtime story perfectly. On Saturday
// his son asks for the father's own fox — the one that coughs in
// the wrong place — and he does it badly, the way the boy likes it.
// The kept act lands on a witness, and the witness prefers it
// imperfect.

const DRAWER = [
  "The agent pays the bills now, books the trains,",
  "answers the landlord in my politest voice.",
  "It can read him the story perfectly, too —",
  "the fox in my growl, the pause at the door,",
  "every voice I ever made for him, kept",
  "in a drawer of sound, and kept better than I keep them.",
];

const REQUEST = [
  "Saturday he pushed the book at me instead,",
  "all elbows and pyjamas, smelling of soap.",
  "\"Do the fox,\" he said. Not the clean fox.",
  "Mine. The one that coughs in the wrong place,",
  "that forgets its words at the door in the wood",
  "and has to be helped by a boy of five.",
];

const BADLY = [
  "So I did it badly, the way he likes it,",
  "wrong voices wandering into the wrong mouths,",
  "and he laughed into the blanket and corrected me",
  "and fell asleep mid-sentence, heavy",
  "as a bag of warm shopping on my arm.",
];

const FOX = [
  "Let it keep the calendar, the trains, the bills.",
  "The fox is mine — hoarse, and wrong, and his.",
];

const GAP = "";

function poem(): string {
  return [...DRAWER, GAP, ...REQUEST, GAP, ...BADLY, GAP, ...FOX].join("\n");
}

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem() + "\n");
