# Customer Support Zone

A React-based Customer Support ticketing system where you can view, manage, and resolve customer tickets in real-time.

## 🚀 Live Demo

[Live Link](YOUR_DEPLOYED_URL_HERE)

## 📦 GitHub Repository

[Repository Link](YOUR_REPO_URL_HERE)

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

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly inside JavaScript files. React uses JSX to describe what the UI should look like.

**Example:**

```jsx
const element = <h1>Hello, World!</h1>;
```

JSX is used because it makes the code more readable and intuitive. Instead of calling `React.createElement()` manually for every element, JSX lets you write familiar HTML-style markup. Under the hood, Babel compiles JSX into regular JavaScript that the browser can understand.

---

### 2. What is the difference between State and Props?

| Feature   | State                                               | Props                                        |
| --------- | --------------------------------------------------- | -------------------------------------------- |
| Ownership | Belongs to the component itself                     | Passed from parent to child                  |
| Mutable   | Yes — can be changed using `setState` or `useState` | No — read-only inside the child              |
| Purpose   | Manages internal, dynamic data                      | Passes data or functions to child components |

**State example:**

```jsx
const [count, setCount] = useState(0);
```

**Props example:**

```jsx
<TicketCard ticket={ticket} onSelect={handleSelect} />
```

In short: **state** is private and controlled by the component, **props** are external and controlled by the parent.

---

### 3. What is the useState hook, and how does it work?

`useState` is a built-in React hook that lets functional components hold and update local state.

**Syntax:**

```jsx
const [value, setValue] = useState(initialValue);
```

- `value` — the current state value
- `setValue` — a function to update the state
- `initialValue` — the starting value

**How it works:** When `setValue` is called with a new value, React re-renders the component and the UI updates to reflect the new state.

**Example from this project:**

```jsx
const [taskStatus, setTaskStatus] = useState([]);

// Adding a ticket to task status:
setTaskStatus((prev) => [...prev, ticket]);
```

---

### 4. How can you share state between components in React?

State is shared between components by **lifting state up** — moving the state to the nearest common parent component, then passing it down as **props** or passing **setter functions** as props so children can update it.

**Example:**

```jsx
// Parent holds the state
const [taskStatus, setTaskStatus] = useState([]);

// Passes state and updater to children
<TicketList onSelect={(ticket) => setTaskStatus(prev => [...prev, ticket])} />
<TaskStatusPanel tasks={taskStatus} />
```

In larger applications, tools like **React Context API** or state management libraries (Redux, Zustand) are used to avoid deeply nested prop passing (called "prop drilling").

---

### 5. How is event handling done in React?

React handles events using **camelCase** event handler attributes directly on JSX elements, instead of HTML's lowercase attributes.

**HTML way:**

```html
<button onclick="handleClick()">Click</button>
```

**React way:**

```jsx
<button onClick={handleClick}>Click</button>
```

You can pass inline arrow functions or reference a named function. React automatically handles event binding.

**Example from this project:**

```jsx
<div onClick={() => onSelect(ticket)}>
    {/* ticket card content */}
</div>

<button onClick={() => handleComplete(ticket)}>
    Mark Complete
</button>
```

Common React events: `onClick`, `onChange`, `onSubmit`, `onMouseEnter`, `onKeyDown`, etc.

---

## 📅 Assignment Deadline

- **60 marks:** 5th March, 2026 (11:59 PM)
- **50 marks:** 6th March, 2026 (11:59 PM)
