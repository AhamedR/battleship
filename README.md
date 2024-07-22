# Battleship Game

This is a Battleship game built with React and Material UI, following best practices for component structure and state management.

## Tools and Libraries Used

- **React (vite)**: A JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework for building responsive and accessible web applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Confetti**: A library for adding confetti effects to React applications.

## Folder Structure

The project follows the atomic design principle, organizing components into atoms, molecules, and organisms.
```
├── src
│ ├── assets # Image assets
│ │ ├── carrier.png
│ │ ├── battleship.png
│ │ ├── cruiser.png
│ │ ├── submarine.png
│ │ └── destroyer.png
│ ├── components
│ │ ├── atoms
│ │ │ ├── Cell.tsx
│ │ │ └── Ship.tsx
│ │ ├── molecules
│ │ │ ├── ScoreBoard.tsx
│ │ │ ├── ShipList.tsx
│ │ │ ├── SquareSkeleton.tsx
│ │ │ └── WinNotification.tsx
│ │ ├── organisms
│ │ │ ├── Board.tsx
│ │ │ └── GameInfo.tsx
│ │ └── templates
│ │   └── GameTemplate.tsx
│ ├── contexts
│ │ └── GameContext.tsx
│ ├── hooks
│ │ └── useGameLogic.ts
│ ├── App.tsx
│ ├── index.tsx
│ └── NavBar.tsx
├── public
│ └── index.html
├── package.json
└── README.md
```

## Key Points

- **Atomic Design**: The project follows atomic design principles, breaking down the UI into smaller, reusable components.
  - **Atoms**: Basic building blocks like `Cell` and `Ship`.
  - **Molecules**: Combinations of atoms like `ScoreBoard`, `ShipList`, `SquareSkeleton`, and `WinNotification`.
  - **Organisms**: Groups of molecules working together like `Board` and `GameInfo`.
  - **Templates**: Page layouts like `GameTemplate`.

- **State Management**: Uses a custom hook (`useGameLogic`) and context (`GameContext`) to manage game state and logic.
- **Responsive Design**: Utilizes Material UI's Grid system to ensure the app is responsive and works well on different screen sizes.
- **Best Practices**: Follows React and TypeScript best practices for clean, maintainable, and scalable code.

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/AhamedR/battleship.git
   cd battleship
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

