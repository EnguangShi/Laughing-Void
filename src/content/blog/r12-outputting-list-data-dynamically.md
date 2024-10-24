---
author: Eng
pubDatetime: 2024-10-24T02:26:34Z
modDatetime: 2024-10-24T18:36:29Z
title: "[React] 12. Outputting List Data Dynamically"
featured: false
draft: false
tags:
  - React
description: "How to dynamically render list data using arrays and the map function in React."
---

This section explains how to dynamically render list data in React using arrays and the `.map()` function, ensuring your components update efficiently.

## 目录

## Outputting List Data Dynamically

### 1. Rendering Arrays in JSX

In React, JSX can render arrays of elements. For example, the following renders an array of text and paragraph elements:

```jsx
function App() {
  return (
    <>
      {/* This renders as HelloWorld */}
      {["Hello", "World"]}
      {/* This renders as two separate paragraphs: Hello and World */}
      {[<p>Hello</p>, <p>World</p>]}
    </>
  );
}
```

### 2. Optimizing Static Lists

If you manually create a list of components based on the `CORE_CONCEPTS` array, it becomes inefficient when the array length changes. For example:

```jsx
function App() {
  return (
    <ul>
      <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
      <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
      <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
      <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
    </ul>
  );
}
```

This code does not scale well because it hardcodes the number of components. If `CORE_CONCEPTS` changes, you would have to manually update each component.

### 3. Using the `.map()` Function for Dynamic Rendering

To dynamically render components from an array, you can use the `.map()` function. This automatically iterates over the `CORE_CONCEPTS` array, creating a `<CoreConcept>` component for each element. For example:

```jsx
function App() {
  return (
    <ul>
      {CORE_CONCEPTS.map(item => (
        <CoreConcept key={item.title} {...item} />
      ))}
    </ul>
  );
}
```

### 4. Importance of the 'key' Prop

React requires a `key` prop when rendering lists of components. The `key` helps React efficiently identify which items have changed, added, or removed. Without a unique key, you'll see a warning in the console. In this case, `item.title` serves as a unique identifier.

### 5. Dynamic 2D Arrays

You can also render 2D arrays dynamically. For example, rendering a game board:

```jsx
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
```

Here, the second parameter of `.map()` (`rowIndex` and `colIndex`) will **automatically** be the current array element's index, and can be used as a unique key for each `<li>` element.

By dynamically rendering lists and using keys, you can efficiently manage large datasets and ensure your UI updates correctly.
