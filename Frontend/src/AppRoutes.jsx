import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CalculatorPage } from "./pages/Calculator";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pet-app" element={<DefaultLayout />}>
          <Route
            path="/pet-app/calculadora-de-melhor-preco-petshop"
            element={<CalculatorPage />}
          />
        <Route
          path="/pet-app"
          element={
            <Navigate
              replace
              to={"/pet-app/calculadora-de-melhor-preco-petshop"}
            />
          }
        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
