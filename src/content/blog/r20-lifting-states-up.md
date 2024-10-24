---
author: Eng
pubDatetime: 2024-10-24T02:26:42Z
modDatetime: 2024-10-24T19:36:15Z
title: "[React] 20. Lifting State Up"
featured: false
draft: false
tags:
  - React
description: "How and when to lift state up in React, with an example of when not to lift state up."
---

This section explains how to lift state up in React to share state across multiple components and includes an example of when not to lift state up.

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

### 5. When Not to Lift State Up

You should avoid lifting state up when the state is updated very frequently. If the state is lifted, it could cause the parent component to re-render too often, which could negatively impact performance.

```jsx
export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);

  // Avoid lifting up playerName state since it's frequently updated (e.g., on every keystroke)
  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleClickEdit() {
    setIsEditing(state => !state);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      // Player name is changed on every keystroke, so lifting it up would cause frequent re-renders
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
```

### 6. A Better Approach

Instead of lifting the frequently updated `playerName` state, you can create a new state in the `App()` component and only update it when the player clicks the "Save" button. This way, the page will be updated less frequently.

By carefully managing when and how to lift state, you can optimize your app’s performance while ensuring the necessary components receive the state they need.

By lifting state up, you can share and manage state across multiple components efficiently in React.
