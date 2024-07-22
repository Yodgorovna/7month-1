import { Home } from "../pages/Home";
import { nanoid } from "nanoid";

export const routs = [
  {
    Component: Home,
    path: "/",
    id: nanoid(),
  },
];
