import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import CreateProductPage from "./pages/CreateProductPage.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateProductPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
