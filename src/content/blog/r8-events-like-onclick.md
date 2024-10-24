---
author: Eng
pubDatetime: 2024-10-24T02:26:30Z
modDatetime: 2024-10-24T18:42:29Z
title: "[React] 08. Events Like 'onClick'"
featured: false
draft: false
tags:
  - React
description: "How to handle events like 'onClick' in React components."
---

This section explains how to handle events like `onClick` in React components, allowing you to define behavior when users interact with your app.

## 目录

## Events Like 'onClick'

### 1. Handling Events in React

React allows you to handle various user interactions through event handlers like `onClick`. These event handlers can trigger functions when certain actions occur (e.g., a button click).

### 2. Implementing 'onClick' in a Component

Let's create an example using the `onClick` event in the `TabButton` component. When the button is clicked, it will execute a function.

In `TabButton.jsx`:

```jsx
export default function TabButton(props) {
  // Function that gets executed when the button is clicked
  function handleClick() {
    console.log("hello");
  }

  return (
    <li>
      {/* Use the built-in onClick event to trigger the function when clicked */}
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
```

### 3. Explanation of 'onClick'

In this example, we define a function `handleClick` inside the `TabButton` component. This function runs when the button is clicked, thanks to the `onClick` event handler.

- `onClick={handleClick}`: This tells React to execute the `handleClick` function when the button is clicked.
- `console.log("hello")`: When the button is clicked, "hello" will be logged to the browser's console.

You can customize the `handleClick` function to perform any action, such as updating the state, calling an API, or manipulating the UI.

By using event handlers like `onClick`, you can make your components interactive and responsive to user input.
