---
author: Eng
pubDatetime: 2024-11-02T00:08:56Z
modDatetime:
title: "[React] 25. Using Chrome Debugger in Sources Panel"
featured: false
draft: false
tags:
  - React

description: "A guide to using Chrome Browser's built-in debugger in the Sources panel with a React and JSX example."
---

This section provides an introduction to using Chrome's Debugger in the Sources panel, focusing on debugging React applications with JSX files.

## 目录

## Using Chrome Debugger in Sources Panel

### 1. Opening Chrome DevTools and the Sources Panel

To start debugging, open Chrome DevTools by pressing **F12** or **Ctrl+Shift+I** (Windows/Linux) or **Cmd+Option+I** (Mac).

- Navigate to the **Sources** panel. This is where you can view and debug your code.
- In the Sources panel, you'll see a file navigator where you can access files from your React project, typically under the `localhost` or your project's domain.

### 2. Setting a Breakpoint in a JSX File

To debug a specific part of your code, locate your JSX file in the **file navigator** on the left side of the Sources panel. For example:

1. Open your main component file, such as `App.jsx`.
2. Find the line where you want to set a breakpoint (e.g., in a `render` method or inside a function).
3. Click the **line number** to set a breakpoint. This will pause code execution when that line is reached, allowing you to inspect variables and application state.

### 3. Example: Debugging a State Update in a JSX Component

Suppose you have the following code in `App.jsx`:

```jsx
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
```

### 4. Setting a Breakpoint in `handleClick` Function

1. In the Sources panel, open `App.jsx`.
2. Locate the `handleClick` function.
3. Click on the line number where `setCount(count + 1);` is located to set a breakpoint.
4. Click the **Increment** button in your application to trigger the `handleClick` function and pause at the breakpoint.

### 5. Inspecting Variables and State

Once the breakpoint is hit:

- **Scope**: You can view variables in the current scope on the right side of the DevTools under the **Scope** section. Here, you can see the `count` variable and inspect its value before and after the update.
- **Call Stack**: The **Call Stack** shows the sequence of function calls that led to the breakpoint. This is useful for tracking down how your code reached a particular line.
- **Watch Expressions**: You can add variables (e.g., `count`) to **Watch Expressions** to monitor their values as you step through your code.

### 6. Using Step Controls

Chrome DevTools offers several controls to help you navigate through your code:

- **Step Over (F10)**: Executes the current line and moves to the next line in the same function.
- **Step Into (F11)**: Enters any function call on the current line.
- **Step Out (Shift+F11)**: Completes the current function and returns to the calling function.
- **Resume Script Execution (F8)**: Continues running the code until the next breakpoint.

Use these tools to step through your code and inspect how state changes in real-time as you interact with your React app.

### 7. Conditional Breakpoints

You can also set **conditional breakpoints** to pause code execution only if a specific condition is met. Right-click on a line number, select **Add conditional breakpoint...**, and enter a condition (e.g., `count === 5`).

### 8. Editing Code in DevTools

In Chrome DevTools, you can make quick changes directly in the **Sources** panel. However, these changes are temporary and will be lost when you reload the page. This can be useful for testing small fixes before implementing them in your code editor.

### 9. Conclusion

Chrome’s Debugger in the Sources panel is a powerful tool for inspecting and understanding how your React application behaves in real-time. By setting breakpoints, inspecting variables, and using step controls, you can diagnose issues and optimize your code efficiently.
