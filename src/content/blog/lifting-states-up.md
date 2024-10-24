---
author: Eng
pubDatetime: 2024-10-24T02:26:23Z
modDatetime:
title: "[React] 20. Lifting State Up"
featured: false
draft: false
tags:
  - React
description: "How to lift state up to the parent component in React to share state between child components."
---

This section explains how and why to lift state up to the parent component in React, allowing state to be shared across multiple child components.

## 目录

## Lifting State Up

### 1. When to Lift State Up

In React, you should lift state up to a parent component when:

- The state needs to be shared between two or more components.
- The state depends on information from multiple components.

By lifting the state up, you can manage the state in one central location (the parent component) and pass it down to the children via props.

### 2. Example of Lifting State Up

Here’s an example where the `activePlayer` state is lifted up to the `App` component. This state is shared between the `Player` and `GameBoard` components, and updated based on user interaction:

```jsx
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer(player => (player === "X" ? "O" : "X"));
  }

  return (
    <>
      <Player
        initialName="Player 1"
        symbol="X"
        isActive={activePlayer === "X"} // The Player component receives the active state
      />
      <Player
        initialName="Player 2"
        symbol="O"
        isActive={activePlayer === "O"} // The second Player component receives the active state
      />
      <GameBoard
        activePlayerSymbol={activePlayer} // The GameBoard component receives the active player symbol
        onSelectSquare={handleSelectSquare} // The GameBoard component handles player selection
      />
    </>
  );
}
```

### 3. Explanation

- **activePlayer state:** The `activePlayer` state is created in the parent component (`App`). This state tracks whether player "X" or player "O" is currently active.
- **handleSelectSquare function:** This function updates the `activePlayer` state whenever a square is selected.
- **Passing state via props:** The `activePlayer` and `handleSelectSquare` function are passed down to the `Player` and `GameBoard` components via props, allowing these components to interact with the shared state.

### 4. Benefits of Lifting State Up

- **Centralized state management:** By keeping the state in the parent component, it’s easier to track and update.
- **Consistent state across components:** Since all components receive the same state from a single source, you avoid inconsistencies and redundant state updates.

By lifting state up, you can share and manage state across multiple components efficiently in React.
