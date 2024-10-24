---
author: Eng
pubDatetime: 2024-10-24T02:26:27Z
modDatetime: 2024-10-24T18:42:29Z
title: "[React] 05. Storing Components in Files"
featured: false
draft: false
tags:
  - React
description: "How to organize and store React components in separate files for better structure."
---

This section explains how to organize your React components by storing them in separate files for better maintainability.

## 目录

## Storing Components in Files

### 1. Why Store Components Separately?

Storing every component in `App.jsx` can quickly become messy and hard to manage, especially as your app grows. To keep things organized, you should store each component in its own file.

### 2. Creating Component Folders

Create a folder structure in `src/components` where each component has its own folder and file. For example, create a `Header` component in `Header/Header.jsx`. All code related to the `Header` component should go into that file.

```jsx
import reactImg from "../../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
```

### 3. Importing Components

Once you've stored a component in its own file, you can import it in your `App.jsx` file. This keeps your code cleaner and more organized.

```jsx
// Import the Header component
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Welcome to my React app!</p>
      </main>
    </div>
  );
}

export default App;
```

By organizing your components into separate files, your project will become easier to maintain as it grows.
