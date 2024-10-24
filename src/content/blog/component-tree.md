---
author: Eng
pubDatetime: 2024-10-24T02:26:23Z
modDatetime:
title: "[React] 2. Component Tree"
featured: false
draft: false
tags:
  - React
description: "Understanding how React components are connected from the HTML to your app."
---

This section explains how React components are connected from your main HTML file to the root of your React app and how they are rendered in the browser.

## 目录

## React Component Tree

### 1. HTML Entry Point

Your React app is connected to an HTML file, usually `index.html`. The important part is the `<div id="root"></div>` element. This is where your React components will be injected.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
```

### 2. JavaScript Entry Point (index.jsx)

Next, we connect React to the `root` element in the HTML. The `index.jsx` file imports the `App.jsx` component and renders it inside the `root` element. This is how the React app starts.

```jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
```

### 3. Components in App.jsx

In the `App.jsx` file, React components are defined with uppercase letters, like `App()`. However, in the browser's developer tools, you will see regular HTML elements, like `div`, because the React components are eventually translated into standard HTML elements.

```jsx
function App() {
  return (
    <div>
      <h1>React Component Tree</h1>
      <p>This app explains the structure of a React app.</p>
    </div>
  );
}

export default App;
```

In your browser, React components are transformed into these standard HTML tags for rendering, but their structure and logic remain part of the React ecosystem.
