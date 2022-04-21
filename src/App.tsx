import { Route, Routes } from "react-router-dom";

import { MainLayout } from "layouts/MainLayout";
import { LandingPage } from "views";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
