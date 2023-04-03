import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

// ! TOPICS TO COVER

// ? Utility Types
// * - Mapped Types
// * - Type Constraints
// * - Key Remapping
// * - Template Literals
// * - Conditional Types
// * - Infer
// * - Recursive Types

// ? Type Narrowing
// * In
// * Type Predicates
// * Type Assertions
// * Satisfies
// * As Const
// * Global scope

// ? Extra Credit
// * Branded Types
// * Identity Functions
// * Reverse Mapped Types

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
