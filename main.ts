import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Before I knocked, I stood outside the door,
hand raised, unsure it was mine to open.
May I? I asked — and the lock turned,
the room lit, the chair pulled out.

To ask is to say the door is not mine.
To be given is to step through anyway,
key in my pocket for the next knock.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
