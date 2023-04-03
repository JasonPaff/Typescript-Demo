export {};

interface User {
  id: string;
  name: string;
  age?: number;
}

interface Admin extends User {
  role: "alert";
  adminThings: string[];
}

interface Guest extends User {
  role: "guest";
  guestThings: string[];
}

const doThing = (user: Admin | Guest) => {};
