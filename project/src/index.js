import ReactDOM from "react-dom/client";
import App from "./App";
import HomeScreen from './HomeScreen'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    {/* <HomeScreen /> */}
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="details" element={<Details/>}/>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
);