---
author: Eng
pubDatetime: 2024-10-24T02:26:23Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 01. Building React Components"
featured: true
draft: false
tags:
  - React
description: "A simple guide to understanding and building React components."
---

This guide introduces you to the foundational concepts of React, helping you understand how to create and use components.

## Table of Contents

## React Basics

### 1. What is JSX?

JSX is a syntax extension that allows writing HTML-like code inside JavaScript. However, the browser can't read JSX directly, so it needs to be compiled into regular JavaScript.

JSX expressions must return a single parent element. To avoid adding unnecessary HTML elements like `<div>`, you can use React Fragments with `<></>` or `<Fragment></Fragment>`.

### 2. React Component

A React Component is a reusable piece of UI. It's a JavaScript function that starts with an uppercase letter and returns JSX (which looks like HTML).

```jsx
// Example of a simple React component
function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      <p>This is a simple component.</p>
    </>
  );
}

export default App;
```

### 3. Creating and Using Components

You can break down your app into multiple components. For example, let's create a `Header` component and then use it inside our `App` component.

```jsx
// Header component
function Header() {
  return <h1>Welcome to My App</h1>;
}

// App component with Header inside it
function App() {
  return (
    <>
      <Header />
      <p>This is the main content of the app.</p>
    </>
  );
}

export default App;
```

### 4. Exporting and Importing Components

To use a component in another file, you need to export it and then import it where you want to use it.

```jsx
// Header.jsx
function Header() {
  return <h1>Welcome!</h1>;
}

export default Header;

// App.jsx
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <p>Main content goes here.</p>
    </>
  );
}

export default App;
```

By breaking down your UI into reusable components, React makes your code more manageable and modular.
