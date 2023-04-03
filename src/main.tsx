import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

// ? TOPICS TO COVER

// ! Utility Types
// * - Mapped Types
// * - Type Constraints
// * - Template Literals
// * - Key Remapping
// * - Conditional Types
// * - Infer Keyword
// * - Recursive Types

// ! Type Narrowing
// * In Keyword
// * Type Predicates
// * Type Assertions
// * Satisfies
// * As Const
// * Branded Types

// ! Extra Credit
// * Identity Functions
// * Reverse Mapped Types

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
