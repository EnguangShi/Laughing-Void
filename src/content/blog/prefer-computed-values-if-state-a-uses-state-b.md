---
author: Eng
pubDatetime: 2024-10-24T02:26:23Z
modDatetime:
title: "[React] 22. Best Practice: Prefer Computed Values if State A uses State B's"
featured: false
draft: false
tags:
  - React
description: "Why and how to prefer computed values when one state depends on another in React."
---

This section explains the best practice of using computed values when one state depends on another, avoiding direct intersections between states.

## 目录

## Best Practice: Prefer Computed Values if State A uses State B's

### 1. Why Prefer Computed Values?

When one state depends on another (e.g., `gameTurns` depending on `activePlayer`), it’s better to compute the value from the existing state rather than directly using the other state. This ensures there is no direct overlap or intersection between states, making your state management cleaner and more predictable.

### 2. Example: Avoid Intersecting States

In this example, `gameTurns` depends on knowing which player is currently active. Instead of directly using `activePlayer`, we compute the active player based on the previous state of `gameTurns`.

```jsx
const [activePlayer, setActivePlayer] = useState("X");
const [gameTurns, setGameTurns] = useState([]);

function handleSelectSquare(rowIndex, colIndex) {
  setActivePlayer(player => (player === "X" ? "O" : "X"));

  // When setting the gameTurns state:
  setGameTurns(prevTurns => {
    // 1. Compute the current active player based on previous turns
    let currentPlayer = "X";
    if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      currentPlayer = "O";
    }

    // 2. Use the computed currentPlayer instead of directly using activePlayer
    const updatedTurns = [
      { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,
    ];
    return updatedTurns;
  });
}
```

### 3. Explanation

- **Avoid Intersecting States:** Instead of directly using `activePlayer` (which is another state), we compute the `currentPlayer` based on the previous state of `gameTurns`.
- **Computed Values:** This ensures that the value of `gameTurns` is always derived from its own state, making it independent of `activePlayer`.

### 4. Conclusion

By computing values based on previous state instead of directly referencing another state, you can avoid intersecting states and keep your React state management clear and maintainable.
