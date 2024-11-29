---
author: Eng
pubDatetime: 2024-10-24T02:26:33Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 11. Rendering Content Conditionally"
featured: false
draft: false
tags:
  - React
description: "How to render content conditionally based on state in React."
---

This section explains how to render content conditionally in React, based on whether certain conditions are met, such as state values.

## Table of Contents

## Rendering Content Conditionally

### 1. Rendering Based on a Condition

You can conditionally render content in React by checking a state or variable and showing different UI elements based on that condition. Here are a few ways to do it.

### 2. Using Ternary Operators for Conditional Rendering

One way to render content conditionally is by using a ternary operator (`something ? a : b`) inside JSX. For example:

```jsx
{
  !selectedTopic ? (
    <p>Please select a topic.</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}
```

In this example, if `selectedTopic` is falsy, a message asking the user to select a topic is displayed. Otherwise, the content for the selected topic is rendered.

### 3. Using Logical AND (`&&`) for Conditional Rendering

Another option is to use the logical `&&` operator. This renders the right-hand side of the expression only if the left-hand side is true.

```jsx
{
  !selectedTopic && <p>Please select a topic.</p>;
}
{
  selectedTopic && (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}
```

### 4. Storing Conditional Content in a Variable

You can also store the content in a variable and update that variable conditionally before returning it in the JSX:

```jsx
let tabContent = <p>Please select a topic.</p>;

if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}

return { tabContent };
```

### 5. Conclusion

By conditionally rendering content, you can make your React components more dynamic and responsive to changes in state or props. Whether using ternary operators, logical `&&`, or variables, conditional rendering is a key part of building interactive UIs in React.
