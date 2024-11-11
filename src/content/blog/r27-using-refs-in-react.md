---
author: Eng
pubDatetime: 2024-11-11T05:54:34Z
modDatetime:
title: "[React] 27. Using Refs in React"
featured: false
draft: false
tags:
  - React
description: "How and when to use Refs in React components, with a focus on simplifying code for reading values."
---

This section explains how to use Refs in React, highlighting when they are useful, their advantages, and how to simplify component code by using them.

## 目录

## Using Refs in React

### 1. What are Refs?

**Refs** in React are references to DOM elements. They allow you to directly access and interact with a DOM element created by React, bypassing React’s state and lifecycle management.

Refs are commonly used in scenarios where you need to read or manipulate a DOM element directly, such as:

- **Accessing form input values**: When you only need to read a value without triggering re-renders.
- **Handling focus**: Managing focus on specific input fields.
- **Interacting with non-React libraries**: Working with libraries that require direct DOM manipulation.

### 2. When to Use Refs

Use Refs when:

- **You don’t need reactivity**: Refs do not trigger re-renders, so they are ideal for scenarios where the component doesn’t need to re-render when the value changes.
- **You want to simplify code**: Using Refs can streamline code by avoiding state management when only reading a value.
- **Working with complex DOM interactions**: Refs provide a straightforward way to access DOM elements when complex interactions are needed.

### 3. Example: Simplifying Code with Refs

Let’s compare two approaches for reading an input value. The first example uses state, which is longer and has unnecessary reactivity. The second example uses a Ref, which is simpler and more efficient.

#### Example without Refs (Using State)

```jsx
import { useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState("");
  const [saved, setSaved] = useState(false);

  function handleChange(event) {
    setSaved(false);
    setPlayer(event.target.value);
  }

  function handleClick() {
    setSaved(true);
  }

  return (
    <section id="player">
      <h2>Welcome {saved ? player : "unknown entity"}</h2>
      <p>
        <input type="text" value={player} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

#### Example with Refs (Simplified)

By using a Ref, we avoid creating extra state and reduce re-renders. This is especially useful when we only want to read the value from the input.

```jsx
import { useRef, useState } from "react";

export default function Player() {
  const inputRef = useRef(); // Ref for the input element
  const [player, setPlayer] = useState(null); // Only store the final name

  function handleClick() {
    setPlayer(inputRef.current.value); // Access the input value directly
  }

  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

### 4. Explanation of the Ref-Based Approach

- **Creating the Ref**: `const inputRef = useRef();` creates a reference to store a DOM element, in this case, the input field.
- **Using the Ref**: `ref={inputRef}` assigns the input element to `inputRef`, making it accessible in the component.
- **Accessing the Value**: `inputRef.current.value` reads the current value of the input without triggering re-renders.

### 5. Benefits of Using Refs

- **Reduces Re-Renders**: Since Refs do not cause re-renders, they are ideal for situations where you only need to read a value without reactivity.
- **Simplifies Code**: Using Refs can reduce the need for additional state management, making the component code more concise.
- **Direct DOM Access**: Refs allow you to access and interact with DOM elements directly, bypassing React’s reactivity.

### 6. When Not to Use Refs

Avoid using Refs when:

- **Reactivity is required**: If the component should re-render based on the value, use `useState` instead.
- **You need to share the value across multiple components**: Use props and state for data that needs to be passed to other components.

### 7. Conclusion

Refs are a powerful tool in React for direct DOM manipulation and for simplifying code when reactivity is not needed. They allow you to avoid unnecessary state management and reduce re-renders. By understanding when to use Refs, you can create more efficient and concise components in your React applications.
