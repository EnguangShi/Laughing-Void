---
author: Eng
pubDatetime: 2024-10-24T02:26:36Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 14. Forwarding Props from Wrapper Component"
featured: false
draft: false
tags:
  - React
description: "How to forward props from a wrapper component to enforce a pattern in React."
---

This section explains how to forward props from a wrapper component to enforce a specific structure or pattern in React.

## Table of Contents

## Forwarding Props from Wrapper Component

### 1. Why Use a Wrapper Component?

In some cases, you may want to enforce a specific pattern or structure for certain components. For example, all your sections might need to follow this pattern:

```html
<section>
  <h2>Some Title</h2>
  The Main Content of the Section
</section>
```

To ensure consistency, you can create a wrapper component that enforces this pattern.

### 2. Creating a Wrapper Component

Here's how you can create a `Section` wrapper component that accepts a `title` and `children`:

```jsx
export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

### 3. Using the Wrapper Component

You can now use the `Section` component in other parts of your app to enforce the structure:

```jsx
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(item => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
```

### 4. Forwarding Additional Props with '...props'

In this example, the `id="core-concepts"` prop is not passed to the `section` element in `Section.jsx`. To forward this and other additional props, we can use the `...props` spread operator:

```jsx
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

The `...props` operator forwards any additional props to the `section` element, ensuring that all intended attributes, such as `id`, are applied.

By using wrapper components and forwarding props, you can create more reusable and flexible components while enforcing specific patterns across your app.
