---
author: Eng
pubDatetime: 2024-10-24T02:26:37Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 15. Setting Dynamic Component Types"
featured: false
draft: false
tags:
  - React
description: "How to set dynamic component types in a wrapper component in React."
---

This section explains how to set dynamic component types in a wrapper component, allowing flexibility in what element or component gets rendered.

## Table of Contents

## Setting Dynamic Component Types

### 1. Why Use Dynamic Component Types?

In some cases, you may want a wrapper component to render different types of elements based on the context. Instead of hardcoding a specific element (like `<menu>`), you can pass the component type as a prop for more flexibility.

### 2. Basic Example

Here's an example of a `Tabs` wrapper component that uses a `<menu>` by default:

```jsx
export default function Tabs({ buttons, children }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
```

### 3. Making the Component Type Dynamic

To allow different component types (such as `<div>`, `<section>`, or even custom components), you can pass the component type as a prop and render it dynamically, `ButtonsContainer` starts with uppercase letter, that tells jsx this is a component rather than a variable:

```jsx
export default function Tabs({ buttons, children, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
```

### 4. Using the Dynamic Component

When using the `Tabs` component, you can pass a built-in component type (like `<menu>`) or a custom component (like `<Section>`) through the `ButtonsContainer` prop:

```jsx
export default function Examples() {
  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={/* your button elements */}
      >
        {/* children content */}
      </Tabs>
    </Section>
  );
}
```

You can also pass a custom component like this, to use a customized component (like `<Section>` in this case) instead of built-in component like `<menu>`:

```jsx
<Tabs ButtonsContainer={Section} buttons={/* your button elements */}>
  {/* children content */}
</Tabs>
```

### 5. Conclusion

By setting dynamic component types, you can make your wrapper components more flexible and reusable, allowing you to render different elements or components based on the specific use case.
