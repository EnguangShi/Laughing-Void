---
author: Eng
pubDatetime: 2024-10-24T02:26:31Z
modDatetime: 2024-10-24T18:42:29Z
title: "[React] 09. Passing Values to Event Functions"
featured: false
draft: false
tags:
  - React
description: "How to pass values to event handler functions in React."
---

This section explains how to pass values to event handler functions, like when clicking a button, in React components.

## 目录

## Passing Values to Event Functions

### 1. Why Pass Values to Event Functions?

When you have multiple components like buttons, you may want to pass specific values to an event handler function. For example, you might want to pass the name of a button when it's clicked.

### 2. Passing Values to Event Functions in App.jsx

In this example, we need to pass the button name to the `handleSelect` function when clicking different `TabButton` components.

```jsx
function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <menu>
      {/* Pass an arrow function to onSelect that calls handleSelect with the desired value */}
      <TabButton onSelect={() => handleSelect("components")}>
        Components
      </TabButton>
      <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
      <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
    </menu>
  );
}
```

### 3. Handling the Event in TabButton.jsx

In the `TabButton` component, we use the `onClick` event to execute the `onSelect` function passed as a prop. This function will be called when the button is clicked.

```jsx
export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
```

### 4. Explanation

- We use arrow functions like `() => handleSelect("components")` instead of using `handleSelect(components)` to pass values to `onSelect`. This prevents the function from being called immediately.
- The `onSelect` prop is passed to the `TabButton` component, and the `onClick` event inside `TabButton` triggers the function when the button is clicked.

By passing values like this, you can make your event handlers dynamic and responsive to specific actions in your components.
