---
author: Eng
pubDatetime: 2024-10-24T02:26:25Z
modDatetime: 2024-10-24T18:42:29Z
title: "[React] 03. Dynamic Values in JSX"
featured: false
draft: false
tags:
  - React
description: "How to use dynamic JavaScript values inside JSX."
---

This section shows you how to work with dynamic values inside JSX, using JavaScript logic to change what gets rendered in the UI.

## 目录

## Dynamic Values in JSX

### 1. Importing Assets

In React, you can import images or other assets and use them in your components.

```jsx
import reactImg from "./assets/react-core-concepts.png";
```

### 2. Using Dynamic JavaScript Values in JSX

To create dynamic content in JSX, you can use JavaScript expressions inside curly braces `{}`. For example, you can randomly choose a word from an array and display it in the UI.

```jsx
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
```

### 3. Creating a Dynamic Header Component

In the following example, the `Header` component randomly selects a description word from the `reactDescriptions` array and inserts it into the JSX using curly braces. It also imports and displays an image using a dynamic value.

```jsx
function Header() {
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

In this way, you can easily inject dynamic content into your components using JavaScript expressions in JSX.
