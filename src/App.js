import React from "react";
import PizzaCard from "./PizaaCard";
import img1 from "./image/pizza.jpg"
import img2 from "./image/pizza1.jpeg"
import img3 from "./image/pizza2.jpg"
import "./index.css";

function App() {
  return (
    <div className="main">
      <PizzaCard name="Пепперони" img={img1} description="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" price="550"/>
      <PizzaCard name="Гавайская" img={img2} description="Экзотический вкус, который погрузит вас в тропическую атмосферу прямо на вашем столе!" price="650"/>
      <PizzaCard name="Маргарита" img={img3} description="Идеально сочетает в себе свежий вкус спелых помидоров, ароматный базилик и нежный сыр моцарелла, расположенные на тонком хрустящем тесте" price="600"/>
    </div>
  );
}

export default App;
