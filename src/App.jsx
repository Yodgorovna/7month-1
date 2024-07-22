import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/main-layout";
import { routs } from "./routes/routs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routs.map(({ Component, path }, id) => (
            <Route
              index={path ? true : false}
              key={id}
              path={path}
              element={<Component />}
            ></Route>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
