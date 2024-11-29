---
author: Eng
pubDatetime: 2024-10-24T02:26:43Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 21. Best Practice: Avoid Intersecting States"
featured: false
draft: false
tags:
  - React
description: "Why and how to avoid intersecting states in React components."
---

This section explains the best practice of avoiding intersecting states in React components, helping you keep state management clear and efficient.

## Table of Contents

## Best Practice: Avoid Intersecting States

### 1. Why Avoid Intersecting States?

In React, it's best to avoid having two states that represent similar or related data for the same purpose. This can lead to confusion, inconsistencies, and redundant state updates.

### 2. Example: Log and GameBoard Components

Let’s say you have an `App` component with two child components: `Log` and `GameBoard`.

- The `GameBoard` component has a state that tracks which player selected which cell.
- The `Log` component needs to track the turns of the game, which includes similar information (like which player selected a cell, and in which turn).

Instead of creating a separate state in `Log` to store this information, you should **lift the state up** to the `App` component. This ensures that both `Log` and `GameBoard` can share the same state without duplicating or intersecting it.

### 3. Avoiding Intersecting States in App

Rather than having separate states in both `Log` and `GameBoard`, create one shared state in the `App` component that holds the information both components need:

```jsx
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex, player) {
    setGameTurns(prevTurns => [
      {
        player,
        square: { row: rowIndex, col: colIndex },
        turn: prevTurns.length + 1,
      },
      ...prevTurns,
    ]);
  }

  return (
    <>
      <Log turns={gameTurns} />
      <GameBoard onSelectSquare={handleSelectSquare} />
    </>
  );
}
```

### 4. Explanation

- **Single source of truth:** By lifting the state to the `App` component, both `Log` and `GameBoard` receive the same, up-to-date information.
- **State sharing:** The `gameTurns` state is shared between `Log` (which displays the turns) and `GameBoard` (which updates the state when a player selects a square).
- **Avoid redundancy:** Instead of having multiple states that hold similar information, you maintain a single source of truth, simplifying the app’s state management.

### 5. Conclusion

Avoiding intersecting states reduces complexity and ensures consistency across your components. By lifting the state up and sharing it between components, you prevent unnecessary duplication and keep your React app's state management efficient and clean.
