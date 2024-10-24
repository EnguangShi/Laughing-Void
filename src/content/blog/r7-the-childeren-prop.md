---
author: Eng
pubDatetime: 2024-10-24T02:26:29Z
modDatetime: 2024-10-24T18:42:29Z
title: "[React] 07. The 'children' Prop"
featured: false
draft: false
tags:
  - React
description: "How to use the 'children' prop to pass content between component tags in React."
---

This section explains how to use the `children` prop in React to pass content between the opening and closing tags of a custom component.

## 目录

## The 'children' Prop

### 1. What is the 'children' Prop?

In React, you can pass content between the opening and closing tags of a custom component. This content is accessible inside the component through a special prop called `children`.

### 2. Using the 'children' Prop

Let's say you want to create a `TabButton` component. You can pass content between the `<TabButton></TabButton>` tags, and this content will be available in the component via `props.children`.

In `App.jsx`:

```jsx
<TabButton>Components</TabButton>
```

In `TabButton.jsx`:

```jsx
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
```

Here, `props.children` refers to the text `Components` between the `TabButton` tags.

### 3. Passing Non-Text Elements with 'children'

The content passed between the opening and closing tags of a component isn't limited to text. You can also pass more complex elements, such as lists, buttons, or even other components.

For example:

```jsx
<TabButton>
  <li>
    <button>Components</button>
  </li>
</TabButton>
```

In this case, the `props.children` will contain the entire list and button structure, not just text.

In `TabButton.jsx`, you can handle this structure in the same way:

```jsx
export default function TabButton(props) {
  return props.children;
}
```

This flexibility allows you to use the `children` prop to pass any type of content between component tags, giving you more control over your UI structure.
