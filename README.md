# Simagar Task Manager

A online shop application built with **Nuxt 4**, **TypeScript** and **Tailwind CSS**.

---

# Tech Stack

- Nuxt 4
- Vue 3 Composition API
- TypeScript
- Tailwind CSS
- axios

---

# Features

- View product list
- Search products
- Sort by count and rate
- Filter by categories
- Reset each filters
- View Single product page
- Loading state
- Empty state
- Error handling
- Responsive UI
- Reusable UI components

---

# Project Structure

```
app
│
├── assets
│   └── css
│
├── components
│   ├── layout
│   └── ui (Simple Design System)
│
├── composables
│
├── layouts
│
├── pages
│
├── services
│
├── utils
│
└── types
```

---

# Architecture

The application follows a layered architecture to separate responsibilities.

```
UI Components
      │
      ▼
Composables
      │
      ▼
Types and Validate
      │
      ▼
API Service
      │
      ▼
Fake Api
```

Each layer has a single responsibility and communicates only with the layer directly below it.

---

# API Layer

The application does not communicate with the API directly from components.

All HTTP requests are encapsulated inside the Composable layer.

This keeps components independent from backend implementation details.

---

# Validation

Form validation is isolated from components.

Validation rules are implemented inside the validator layer to keep forms clean and maintainable.

---

# Reusable Components

The project contains reusable UI components including:

- Button
- Input
- BottomSheet
- CheckBox
- Chip
- Radio
- Spinner

This approach keeps the UI consistent and avoids duplication.

---

# Error Handling

Errors are propagated to the composables where they are handled before reaching the UI.

This keeps components simple and predictable.

---

# Performance Considerations

The project includes several performance considerations:

- Reusable composables
- Small reusable components
- Separation of business logic from UI
- Minimal reactive state
- SSR and Caching

---

# Running the Project

## Install dependencies

```bash
pnpm install
```

## Start Nuxt

```bash
pnpm dev
```

Application:

```
http://localhost:3000
```

---

# Folder Responsibilities

| Folder | Responsibility |
|----------|---------------|
| components | UI |
| services | HTTP client |
| composables | Shared logic |
| types | Shared types and validation |
| utils | Mini Helpers |

---

# Developer decisions

- Combined use of SVG and <Icon/> to display icons
    Reason: Due to limited design information regarding icons in Figma.

- Using a background color that complements the design for the photos, given that most of them are transparent.

- The filter sidebar was made sticky so that it remains accessible while scrolling through the list.

---

# Nice To Have

- Products list pagination (Infinite Scroll). This feature requires backend and api changes.

---

# Notes

The project follows a modular structure with emphasis on readability, maintainability and scalability.

Business logic, API communication and presentation layers are intentionally separated to improve long-term maintainability.