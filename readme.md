# React JS

React is a JavaScript library developed by Facebook for building user interfaces, especially for single-page applications. It helps in creating dynamic and interactive UIs with a component-based architecture. React allows for the efficient updating and rendering of components, making it easy to build scalable and maintainable applications.

**Install React with Vite:**
* Create a project with =>  npm create vite@latest my-react-app --template react.
* Navigate to the project folder => cd my-react-app
* Install dependencies using => npm install.
* Run the app with => npm run dev.

**Documentation guide to install tailwindcss with Vite** : https://tailwindcss.com/docs/installation/using-vite

**React Flow and Structure:**
React follows a declarative approach to building UIs, where developers describe what the UI should look like based on the state. React has a component-based structure, where the UI is divided into small, reusable components. Each component has its own state and can manage its lifecycle.

**Components:** Building blocks of a React app (either functional or class-based).
* State: Represents dynamic data that changes over time.
* Props: Data passed from a parent component to a child component.
* React components are arranged in a tree-like structure, where parent components can pass data down to child components using props.

**React Library:**
The React library is focused on creating UI components and managing their state. It provides utilities like hooks, context API, and lifecycle methods to manage side effects, update the UI, and interact with external data. React is lightweight, and you can integrate it with other libraries for routing, state management, etc.

**JSX (JavaScript XML):**
JSX is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript. It allows developers to write UI components in a format that looks similar to HTML but is actually converted into JavaScript calls behind the scenes.

JSX gets transpiled into React.createElement calls, which React then uses to create the UI.

**Why We Need Hooks:**
Hooks were introduced in React 16.8 to allow functional components to have state and lifecycle methods, something that was previously only possible with class components. They help make the code more concise, reusable, and easier to manage.

Some common hooks are:
* useState: For managing state in a functional component.
* useEffect: For performing side effects (e.g., data fetching, subscriptions).
* useContext: For accessing context values in components.

**Virtual DOM:**
The Virtual DOM is a lightweight copy of the actual DOM (Document Object Model) in memory. When a component's state changes, React first updates the Virtual DOM, compares it with the previous version (using a diffing algorithm), and then efficiently updates the real DOM only where necessary.

This process improves performance by minimizing expensive DOM manipulations.

**Fiber:**
React Fiber is the reimplementation of React's core algorithm for rendering and updating the UI. It improves React's performance by making the rendering process more incremental, allowing React to work on parts of the UI over multiple frames, making it smoother and less blocking. It also introduces the concept of "priority" rendering, allowing React to prioritize tasks.

**Reconciliation:**
Reconciliation is the process by which React updates the real DOM in the most efficient way possible. It involves comparing the new Virtual DOM with the previous one (diffing) and updating only the parts of the UI that have changed. This minimizes the number of updates and improves performance.

**Memoization:**
Memoization is a technique to optimize performance by caching the result of a function so that the same result doesn't need to be recalculated multiple times. In React, memoization is often used with:

* React.memo: A higher-order component that prevents unnecessary re-renders of functional components.
* useMemo: A hook that memoizes expensive calculations in functional components.
* useCallback: A hook to memoize functions, preventing unnecessary recreations on each render.
  
These techniques are useful in reducing performance bottlenecks, especially in large applications with complex UIs.
