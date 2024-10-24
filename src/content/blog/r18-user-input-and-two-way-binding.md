---
author: Eng
pubDatetime: 2024-10-24T02:26:40Z
modDatetime: 2024-10-24T18:36:29Z
title: "[React] 18. User Input & Two-Way Binding"
featured: false
draft: false
tags:
  - React
description: "How to implement two-way binding for real-time user input updates in React."
---

This section explains how to implement two-way binding in React to handle real-time updates for user inputs, such as text input fields.

## 目录

## User Input & Two-Way Binding

### 1. Real-Time User Input

In React, you can create real-time updating input fields by using **two-way binding**. This means the input field's value is bound to the state, and when the user types, the state is updated in real-time.

Here’s an example that sets a default value and allows real-time updates to a player's name input field:

```jsx
const [playerName, setPlayerName] = useState(initialName);

let editablePlayerName = <span className="player-name">{playerName}</span>;

// When the user is editing, the input box replaces the span and listens for changes
if (isEditing) {
  editablePlayerName = (
    <input type="text" required value={playerName} onChange={handleChange} />
  );
}

// handleChange updates the playerName state as the user types
function handleChange(event) {
  setPlayerName(event.target.value);
}
```

### 2. Explanation

- **Initial Setup:** We use `useState` to set the initial player name (`initialName`).
- **Editable Input Field:** When `isEditing` is true, the span with the player's name is replaced with an `<input>` field.
- **Two-Way Binding:** The `value` of the input field is bound to `playerName`, and the `onChange` event listens for user input. When the user types, `handleChange` is triggered, updating the state with the new value. This updated state is then reflected back in the input field.

### 3. Benefits of Two-Way Binding

- Keeps the state and the UI in sync at all times.
- Allows for real-time updates to the UI as the user interacts with the input field.
- Ensures that the input field always displays the latest state.

By using two-way binding in React, you can easily manage user input and keep your components reactive and up-to-date with user interactions.
