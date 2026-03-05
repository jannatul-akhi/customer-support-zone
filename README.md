# Customer Support Zone

A React-based Customer Support ticketing system where you can view, manage, and resolve customer tickets in real-time.

## 🚀 Live Demo

[Live Link](https://customer-support-zone-three.vercel.app/)

## 📦 GitHub Repository

[Repository Link](https://github.com/jannatul-akhi/customer-support-zone)

---

## 🛠️ Tech Stack

- React.js
- Tailwind CSS v4
- Lucide React (icons)
- React Icons
- React Toastify (toast notifications)
- Vite (build tool)

---

## 📌 Features

- View all customer support tickets in a 2-column card layout
- Click a ticket to add it to the **Task Status** panel
- In-Progress count updates live in the banner
- Mark a ticket as **Complete** — it moves to the Resolved list
- Resolved count increases; ticket is removed from the ticket list
- Toast notifications for all actions (no browser alerts)
- Fully responsive for mobile devices

---

## ❓ Concept Questions

### 1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It is a syntax used in React that allows developers to write HTML-like code inside JavaScript. JSX makes it easier to design and visualize the UI structure of a component.

Instead of using complex JavaScript methods to create elements, JSX lets developers write code that looks similar to HTML. This improves readability and makes the code easier to understand and maintain.

For example, instead of writing long JavaScript functions to create elements, we can simply write JSX to describe how the UI should look.

---

### 2. What is the difference between State and Props?

State and Props are both used to manage data in React, but they work differently.

Props (Properties) are used to pass data from a parent component to a child component. Props are read-only, which means the child component cannot change them.

State, on the other hand, is used to manage data inside a component. State can change over time, and when it changes, the component automatically re-renders to update the UI.

In simple terms, props are passed from outside the component, while state is managed within the component itself.

---

### 3. What is the useState hook, and how does it work?

useState is a React Hook that allows functional components to manage state. Before hooks were introduced, state was mainly used in class components, but useState made it possible to use state in functional components.

The useState hook returns two values:

The current state value

A function to update that state

When the state is updated using the setter function, React automatically re-renders the component so the UI reflects the new state.

This makes it very useful for things like counters, form inputs, toggles, and dynamic UI updates.

### 4. How can you share state between components in React?

In React, state is usually shared between components through a concept called lifting state up.

This means that if multiple components need the same state, the state should be moved to their closest common parent component. The parent component then passes the state and related functions to child components using props.

Another way to share state in larger applications is by using React Context API or state management libraries such as Redux or Zustand.

### 5. How is event handling done in React?

Event handling in React is similar to HTML, but it follows JavaScript conventions.

In React, events are written using camelCase, such as onClick, onChange, or onSubmit. Instead of writing strings like in HTML, React uses functions as event handlers.

When an event occurs, React calls the specified function to perform an action, such as updating state or triggering some logic.

For example, a button click can call a function that changes the state, which then updates the UI automatically.
