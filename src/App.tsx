import { Route, Routes } from "react-router-dom";
import PaginaPrincipal from "./pages/paginaPrincipal";


function App() {

  return (
    <main>
      <Routes>
        <Route element={<PaginaPrincipal />} path="/" />
      </Routes>
    </main>
  );
}

export default App;
