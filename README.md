# Component-Based TODO List with Lit

This project is a simple TODO list application built with Lit Web Components.
It demonstrates modularity, reusability, encapsulation, composition, and separation of concerns.

## How to Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite in the terminal.

## Component Architecture

```text
todo-app       - Container component: manages state and composes children
  todo-input   - Handles user input and emits the add-todo event
  todo-list    - Renders a list of todo-item components
    todo-item  - Displays one TODO and emits toggle-todo and delete-todo events
    todo-item
    ...
```

## Components

### todo-app
The main container component. It owns the TODO state and contains the functions for adding, toggling, deleting, and clearing TODO items. It composes the application by rendering todo-input and todo-list.

### todo-input
Responsible only for the input form. It keeps track of the typed value and emits an add-todo custom event when the form is submitted.

### todo-list
Responsible only for displaying the list of TODO items. It receives the TODO array as a property and renders multiple todo-item components.

### todo-item
Responsible for displaying one TODO item. It contains its own checkbox and delete button. It emits toggle-todo and delete-todo events instead of modifying the main state directly.

## Component-Based Principles

| Principle | How It Is Demonstrated |
|---|---|
| Modularity | The application is divided into separate modules: todo-app.js, todo-input.js, todo-list.js, and todo-item.js. |
| Reusability | todo-item can be reused anywhere a single TODO needs to be displayed. todo-input can also be reused in another app that needs text input and submit behavior. |
| Encapsulation | Each component hides its internal template, styles, and logic inside its own class and Shadow DOM. Other components interact with it through properties and custom events. |
| Composition | todo-app builds the full application by combining todo-input and todo-list, while todo-list combines multiple todo-item components. |
| Separation of Concerns | Each component has one clear responsibility: input, list rendering, single-item display, or state management. |

## Files Included

```text
lit-todo-assignment/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.js
    ├── todo-app.js
    ├── todo-input.js
    ├── todo-list.js
    └── todo-item.js
```
