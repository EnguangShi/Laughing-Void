---
author: Eng
pubDatetime: 2024-11-02T00:57:03Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 26. Using React Strict Mode for Debugging"
featured: false
draft: false
tags:
  - React
description: "A guide on using React Strict Mode to identify potential issues, with a simple example using arrays."
---

This section introduces React Strict Mode and explains how it can help you identify potential issues in your React applications, with a simplified example using arrays.

## Table of Contents

## Using React Strict Mode for Debugging

### 1. What is React Strict Mode?

**React Strict Mode** is a tool provided by React to highlight potential problems in an application. It helps you find issues by intentionally running certain functions twice (in development mode only), showing warnings for common issues such as:

- Using deprecated lifecycle methods
- Side effects in rendering logic
- Unsafe state changes

React Strict Mode doesn’t render any visible elements on the page, nor does it impact the production build. It is intended solely for development to improve code quality and help you identify bugs early.

### 2. Enabling React Strict Mode

To enable Strict Mode, wrap your application's component tree in `<React.StrictMode>`. For example, in `index.js`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 3. Example: Identifying Issues with Arrays in Component

Consider the following component where an array is accidentally declared outside the main function. This causes the array to retain data between renders, leading to unexpected behavior:

```jsx
import React, { useState } from "react";

// Placing the array outside the component function causes it to persist between renders
const messages = [];

function MessageList() {
  const [input, setInput] = useState("");

  function handleAddMessage() {
    messages.push(input); // Adds the new message to the persistent array
    setInput(""); // Resets input, but messages persists with old data
  }

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleAddMessage}>Add Message</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
```

### 4. How React Strict Mode Helps

With React Strict Mode enabled, the above component will render twice in development mode. This will cause the `messages` array to retain old data between renders, which can result in duplicate messages appearing in the list, even when you might not expect it.

For example:

- You type "Hello" and click "Add Message."
- Because `messages` is outside the component function, it isn’t reset on each render. The next render still has "Hello" in `messages`, causing it to duplicate if the component re-renders.

This example demonstrates how Strict Mode helps you see issues with arrays or objects that should be reset between renders but aren’t due to being placed outside the component.

### 5. Correcting the Example by Moving Array Inside Component

To fix the component, move the `messages` array inside the component function so that it resets on each render:

```jsx
import React, { useState } from "react";

function MessageList() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // Manage messages with useState

  function handleAddMessage() {
    setMessages([...messages, input]); // Add new message, updating state
    setInput("");
  }

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleAddMessage}>Add Message</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
```

In this corrected example:

- The `messages` array is now managed with `useState`, so it resets correctly on each render.
- React Strict Mode won’t cause duplicate messages anymore because each re-render correctly reflects the current state.

### 6. Benefits of Using React Strict Mode

- **Detects Persistent Variables:** Helps you identify variables that unintentionally persist across renders.
- **Warns About Deprecated APIs:** Highlights deprecated methods and API usage that may cause issues in future React versions.
- **Encourages Best Practices:** React Strict Mode encourages safer coding practices, helping you avoid common pitfalls.

### 7. Conclusion

React Strict Mode is a valuable tool for catching potential issues early in development. By enabling it, you can improve the quality of your code, reduce bugs, and make your application more maintainable. Consider keeping it enabled throughout your development process to ensure best practices are followed.
