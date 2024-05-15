import React, { useState } from 'react';
import "./index.css";
import img1 from "./image/cart1.png";

const PizzaCard = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [diameter, setDiameter] = useState('');
    const [price, setPrice] = useState(props.price);

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleOrder = () => {
        alert(`Количество заказанного товара: ${quantity}.`);
    };

    const handleDiameterChange = (event) => {
        const selectedDiameter = event.target.value;
        setDiameter(selectedDiameter);

        if (selectedDiameter === "25") {
            setPrice(parseInt(props.price));
        } else if (selectedDiameter === "30") {
            setPrice(parseInt(props.price) + 150);
        } else if (selectedDiameter === "35") {
            setPrice(parseInt(props.price) + 250);
        }
    };

    return (
        <div className="pizzaCard">
            <img src={props.img} alt="Пицца" />
            <h2 className='title'>{props.name}</h2>
            <div className='description'>{props.description}</div>
            <select className='select__block' value={diameter} onChange={handleDiameterChange}>
                <option value="" disabled selected>Диаметр</option>
                <option value="25">25 см</option>
                <option value="30">30 см</option>
                <option value="35">35 см</option>
            </select>
            <h2 className='price'>От {price}₽</h2>

            <div className='sub__block'>
                <div className="submit__quantity">
                    <button className="btn" onClick={decreaseQuantity}>-</button>
                    <span className="quan">{quantity}</span>
                    <button className="btn" onClick={increaseQuantity}>+</button>
                </div>

                <button className="sub__btn" onClick={handleOrder}>
                    <img src={img1} alt="Корзина" />
                </button>
            </div>




        </div>
    );
};

export default PizzaCard;
