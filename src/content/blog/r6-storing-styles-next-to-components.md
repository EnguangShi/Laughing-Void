---
author: Eng
pubDatetime: 2024-10-24T02:26:28Z
modDatetime: 2024-10-24T18:42:29Z
title: "[React] 06. Storing Styles next to Components"
featured: false
draft: false
tags:
  - React
description: "How to store styles next to components for better modularity and structure."
---

This section explains how to store styles next to React components to keep your project modular and organized.

## 目录

## Storing Styles next to Components

### 1. Organizing Styles with Components

Instead of putting all styles in a single `index.css` file, it's better to store styles next to the components they belong to. This keeps things organized and makes your components more self-contained.

### 2. Creating a Style File for a Component

For example, in the `src/components/Header` folder, create a `Header.css` file. This file should contain all the styles related to the `Header` component.

```css
header {
  text-align: center;
  margin: 3rem 0;
}

header img {
  height: 5rem;
  width: 10rem;
  object-fit: cover;
}

header h1 {
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 5rem;
  background: linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
}

header p {
  margin: 0;
  font-size: 1.25rem;
  color: #8964b0;
  font-family: "Roboto Condensed", sans-serif;
}
```

### 3. Importing the Styles in the Component

In `Header.jsx`, import the CSS file you just created. This will apply the styles to the `Header` component.

```jsx
import "./Header.css";

export default function Header() {
  const description = "Core React Concepts";
  return (
    <header>
      <img src="/path/to/image.png" alt="React Logo" />
      <h1>React Essentials</h1>
      <p>{description} you need for your app.</p>
    </header>
  );
}
```

### 4. Important Note About Global Styles

Be careful! When you import `Header.css` in `Header.jsx`, the styles will be applied globally to **all** `<header>` elements, not just the `Header` component. This happens because the CSS file is applied globally by default in React.

There are ways to scope CSS to specific components, which will be covered in a future section!
