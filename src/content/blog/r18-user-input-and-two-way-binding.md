---
author: Eng
pubDatetime: 2024-10-24T02:26:40Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 18. User Input & Two-Way Binding"
featured: false
draft: false
tags:
  - React
description: "How to use two-way binding in React to sync user input with component state."
---

This section explains how to implement two-way binding in React, which allows you to sync user input with the component’s state.

## Table of Contents

## User Input & Two-Way Binding

### 1. What is Two-Way Binding?

**Two-way binding** is a feature that allows a UI element (e.g., an input field) to be bound to a state variable, so any changes in the input field update the state variable, and vice versa.

In React, this can be achieved by setting the `value` of an input field to a state variable and updating that state variable on every change.

### 2. Simple Example of Two-Way Binding

Here is a simple example where the user's input in a text field is directly synced with the component’s state.

```jsx
import React, { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value); // Updates the state as the user types
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name} // Binds input to state
        onChange={handleChange} // Updates state on change
      />
      <p>Your name is: {name}</p> // Displays the current state
    </div>
  );
}

export default NameInput;
```

### 3. How This Example Works

- **Binding the Input to State**: The `value` of the input is set to `name`, so the displayed input value is always in sync with the `name` state variable.
- **Updating State on Change**: The `onChange` handler updates the `name` state whenever the user types. This keeps the input value and the state synchronized.

### 4. Benefits of Two-Way Binding in React

- **Real-Time Display**: You can immediately reflect user input in other parts of the UI by displaying the state, as shown in the example with "Your name is: {name}".
- **Controlled Components**: Two-way binding ensures that your components are controlled, meaning that their behavior and state are fully managed by React, reducing unexpected behavior.

### 5. Conclusion

Two-way binding is a powerful way to keep user input and application state synchronized. By binding the input’s `value` to the state variable and using `onChange` to update the state, you create a direct connection between the UI and the underlying data.
