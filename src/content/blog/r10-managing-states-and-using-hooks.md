---
author: Eng
pubDatetime: 2024-10-24T02:26:32Z
modDatetime: 2024-10-24T18:36:29Z
title: "[React] 10. Managing State & Using Hooks"
featured: false
draft: false
tags:
  - React
description: "How to manage state in React components using hooks like 'useState'."
---

This section explains how to manage state in React components using hooks, such as `useState`, to update the UI when interacting with the app.

## 目录

## Managing State & Using Hooks

### 1. Why React Doesn't Re-Render by Default

React renders the JSX output once by default. If a button is clicked, and you change a variable in the component function, the UI will not automatically update. For example:

```jsx
function App() {
  let tabContent = "No Content";
  function handleSelect(selectedButton) {
    tabContent = selectedButton;
  }

  return (
    <menu>
      <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
      <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
      <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
    </menu>
    {tabContent}
  );
}

export default App;
```

In this example, clicking a button does not update the `{tabContent}` because the `App()` function doesn't re-run after the first render.

### 2. Solving This with React State

We can solve this issue by using React's state. This ensures that when a state value changes, the component will re-render with the updated value.

```jsx
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("No Content");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // This logs the OLD value due to how React schedules state updates
    // Because when React runs setSelecetedTopic, it schedule the state update after running all functions, including console.log
    console.log(selectedTopic);
  }

  return (
    <menu>
      <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
      <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
      <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
    </menu>
    {selectedTopic}
  );
}

export default App;
```

### 3. How 'useState' Works

- **What is a React Hook?** Hooks like `useState` allow you to add state to functional components. Hooks must be called at the top level of the component.
- **Using 'useState':** `useState` returns an array of two elements: the current state (`selectedTopic`) and a function to update the state (`setSelectedTopic`).
- **Re-Rendering:** When `setSelectedTopic` is called, React schedules a re-render of the component with the updated state value.

By using hooks like `useState`, you can make your components reactive and ensure the UI reflects the latest changes to the state.
