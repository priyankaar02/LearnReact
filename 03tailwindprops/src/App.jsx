import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const cardData = {
    detailedDescription:
      "A rich and moist chocolate cake topped with creamy frosting.",
    tags: ["Chocolate", "Dessert", "Sweet", "Bestseller"],
  };
  return (
    <>
      <h1 class="text-3xl font-bold p-3 mb-4 bg-sky-100 rounded-md text-blue-700">
        Vite with Tailwind CSS
      </h1>
      <Card
        title="Mouthful Magic"
        image="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card
        title="Tasty Temptations"
        subtitle="Crafted for Dessert Lovers"
        image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Card title="Flavor Haven" data={cardData} />
      <Card />
    </>
  );
}

export default App;
