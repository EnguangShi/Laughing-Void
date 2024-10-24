---
author: Eng
pubDatetime: 2024-10-24T02:26:45Z
modDatetime: 2024-10-24T18:36:29Z
title: "[React] 23. Best Practice: Deriving State from Props"
featured: false
draft: false
tags:
  - React
description: "How to derive state from props in React to minimize state management."
---

This section explains the best practice of deriving state from props in React, allowing you to manage less state and compute values based on existing state.

## 目录

## Best Practice: Deriving State from Props

### 1. The Rule: Manage Less State

The key rule is to **manage as little state as possible**. Whenever possible, you should derive values or information from existing state, rather than creating additional state. This keeps your state management simpler and avoids unnecessary complexity.

### 2. Example: Deriving GameBoard State from Props

In this example, the `turns` state is passed into the `GameBoard` component as a prop. Instead of creating a separate state for the game board, we derive the board's status from the `turns` state:

```jsx
export default function GameBoard({ turns, onSelectSquare }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player; // Deriving the game board state based on the turns
  }

  return <div>{/* Render the gameBoard */}</div>;
}
```

### 3. Explanation

- **State Minimization:** Instead of having a separate state to track the game board’s current status, we derive it from the `turns` prop, which already contains all the necessary information (i.e., which player selected which square).
- **Efficient State Management:** This approach reduces redundancy and keeps the component more efficient by deriving the game board from the existing `turns` state.

### 4. Conclusion

By deriving state from props, you can minimize the amount of state your components need to manage. This leads to cleaner, more maintainable code and helps prevent redundant or intersecting states in your React app.
