---
author: Eng
pubDatetime: 2024-10-24T02:26:26Z
modDatetime: 2024-10-24T18:42:29Z
title: "[React] 04. Components with Props"
featured: false
draft: false
tags:
  - React
description: "How to pass and use dynamic data in components with props."
---

This section explains how to pass and use dynamic data in components using props in React.

## 目录

## Components with Props

### 1. Passing Data with Props

In React, props (short for "properties") are used to pass data from one component to another. You can receive props as an object and access their values.

```jsx
// receive props as an object in a parameter called props
function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* put in props for CoreConcept component */}
            <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentsImg}
            ></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}
```

### 2. Destructuring Props

Instead of accessing props with `props.propertyName`, you can destructure them directly in the function's parameter list, making the code cleaner.

```jsx
// {} in parameter list is used to destructuring the props, the name must be the same as the props coming in
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
```

### 3. Using Data Arrays with Props

You can pass data dynamically by using arrays and objects, as shown below. In this example, the `CORE_CONCEPTS` array from `data.js` is used to supply the props for multiple components.

```jsx
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
      </main>
    </div>
  );
}
```

In this way, you can dynamically generate components with varying data by passing different props to them.
