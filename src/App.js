import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/employees";
import "./App.css";

function App() {
  return (
    <div style={{ padding: 48 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/employee" element={<List />} />

          {/* NO MATCH ROUTE */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
