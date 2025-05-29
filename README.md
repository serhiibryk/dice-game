# Dice Game

A simple interactive dice game built with **Next.js**, **TypeScript**, and **Material UI**.

---

## Technologies Used

- [Next.js (App Router)](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Material UI (MUI)](https://mui.com)
- `localStorage` (for saving game history)

---

## Features

- ✅ User sets a threshold from 0 to 100.
- ✅ Chooses "Over" or "Under" as a condition.
- ✅ Clicks "Play" to roll a random number from 1 to 100.
- ✅ If the rolled number satisfies the condition — user wins.
- ✅ Displays win/lose result via styled message.
- ✅ Saves each game into history (max 10 records).
- ✅ History is persisted in `localStorage`.

---

## How the Game Works

1. You select a threshold (e.g. `20`).
2. You choose the direction:
   - **Over** — number should be `> 20`
   - **Under** — number should be `< 20`
3. Press **PLAY**.
4. Dice rolls a number from 1 to 100.
5. Result is shown immediately with success/fail message.
6. The outcome is saved to the game history (up to 10 entries).

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dice-game.git
cd dice-game
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Start Development Server

```bash
yarn dev
# or
npm run dev
```

Open your browser at http://localhost:3000 and enjoy!
