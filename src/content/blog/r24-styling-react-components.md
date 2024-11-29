---
author: Eng
pubDatetime: 2024-11-01T18:16:02Z
modDatetime: 2024-11-29T22:34:51Z
title: "[React] 24. Styling React Components"
featured: false
draft: false
tags:
  - React
description: "Various methods for styling React components, including CSS, CSS Modules, styled-components, and Tailwind CSS."
---

This section covers different methods for styling React components, from vanilla CSS to styled-components, including dynamic styles and media queries.

## Table of Contents

## Styling React Components

### 1. Using index.css

- You can place all CSS rules in a single `index.css` file, or split them into multiple files to keep styles alongside specific components.
- Note: Splitting into different CSS files will still apply styles globally, not just to the component where the CSS file is imported.

### 2. Solution 1: Inline Styles

```jsx
<p style={{ color: "red", textAlign: "left" }}>
  A community of artists and art-lovers.
</p>
```

- Inline styles apply only to the current element.
- Use camelCase for CSS properties (e.g., `textAlign`).

#### Dynamic Inline Styles

```jsx
<p style={{ color: valid ? "green" : "red" }}>
  A community of artists and art-lovers.
</p>
```

### 3. Dynamic Styling with External CSS and className

```jsx
<input className={emailNotValid ? "invalid" : undefined} />
```

For multiple class names with dynamic styles:

```jsx
<input className={`input ${emailNotValid ? "invalid" : ""}`} />
```

### 4. Solution 2: CSS Modules

- Rename the CSS file to `.module.css`.
- Import it in your component (e.g., `import classes from './Header.module.css'`).
- Use `classes.paragraph` to apply styles. (`paragraph` is a class defined in the css file)

This makes the CSS class unique, only affecting the component that imported it.

### 5. Dynamic Styles with CSS Modules

```jsx
<input className={classes.input} />
<input className={`${classes.input} ${isInvalid ? classes.invalid : ""}`} />
```

### 6. Solution 3: Styled Components

Install styled-components:

```bash
npm install styled-components
```

Create styled components:

```jsx
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function Header() {
  return <StyledDiv></StyledDiv>;
}
```

#### Dynamic Styles with Styled Components

```jsx
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ $valid }) => ($valid ? "green" : "red")};
`;

export default function Header() {
  const isValid = false;
  return <StyledDiv $valid={isValid}></StyledDiv>;
}
```

#### Media Queries with Styled Components

```jsx
const StyledHeader = styled.header`
  color: red;

  & img {
    width: 11rem;
  }

  &:hover {
    width: 12rem;
  }

  @media (min-width: 768px) {
    color: green;

    & h1 {
      color: blue;
    }
  }
`;
```

- `& img` targets images inside the header.
- `&:hover` applies styles on hover.
- `@media` adjusts styles for specific screen sizes.

### 7. Reusable Styled Component

Create a reusable styled component (e.g., `Button.jsx`):

```jsx
import { styled } from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;

  &:hover {
    background-color: red;
  }
`;

export default Button;
```

Import and use this component:

```jsx
import Button from "./Button.jsx";
```

### 8. Tailwind CSS

Tailwind CSS allows for flexible and rapid styling without writing CSS. It includes many utility classes, making it easy to apply styling without in-depth CSS knowledge. Some examples:

- **Background color and padding:** `bg-blue-500 p-4`
- **Text styling:** `text-xl font-bold text-center`
- **Flexbox utilities:** `flex items-center justify-between`
- **Responsive design:** `md:w-1/2 lg:w-1/4`

These classes enable quick styling but can lead to long class names in the component code.

By understanding these various styling approaches, you can select the best method depending on your project needs and preferences.
