import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DescriptionForm from "./Components/DescriptionForm/DescriptionForm";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DescriptionForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
