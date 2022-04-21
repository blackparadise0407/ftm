import { MainLayout } from "layouts/MainLayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<div>Hello world</div>} />
      </Route>
    </Routes>
  );
}

export default App;
