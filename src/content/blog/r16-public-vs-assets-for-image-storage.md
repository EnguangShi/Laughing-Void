---
author: Eng
pubDatetime: 2024-10-24T02:26:38Z
modDatetime: 2024-10-24T18:36:29Z
title: "[React] 16. public/ vs assets/ for Image Storage"
featured: false
draft: false
tags:
  - React
description: "Understanding the difference between public/ and assets/ for storing images in a React project."
---

This section explains the difference between the `public/` and `assets/` folders for storing images in a React project, and when to use each one.

## 目录

## public/ vs assets/ for Image Storage

### 1. The public/ Folder

The `public/` folder is used to store files that need to be **publicly accessible**. Files stored here can be directly referenced in your `index.html` or `index.css` files.

- Files in `public/` are available via the project development server.
- You can access these files directly by typing the URL (e.g., `localhost:5173/some-image.jpg`) in the browser.
- These files are not processed or optimized by the build process.

This is useful for files that you want to remain unchanged and directly accessible, such as images referenced in `index.html` or favicons.

### 2. The src/assets/ Folder

On the other hand, the `src/assets/` folder (or anywhere in the `src` folder) is used for files that are **not publicly accessible** but are instead imported and used in your React components or code.

- Files in `src/assets/` cannot be accessed directly from the browser (e.g., `localhost:5173/src/assets/some-image.jpg` would give an error).
- These files are used in your code files and will be handled by the build process. This means they can be optimized or processed before being served to the browser.

When you import an image from `src/assets/`, the build system takes care of linking and optimizing the image for you.

### 3. Which Folder Should You Use?

- **Use the `public/` folder** for images that should **not be handled by the build process** and should be directly accessible, like favicons or images used in `index.html`.
- **Use the `src/assets/` folder** for images that are used inside your React components. These images will be handled by the build process and optimized.

By understanding the difference between these two folders, you can better manage your assets and ensure your project is optimized and well-structured.
