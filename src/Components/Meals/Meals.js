import React, { useEffect, useContext } from "react";

import MealItem from "./MealItem";
import ModalBackground from "../Modal/ModalBackground";
import Cart from "../Cart/Cart";

import style from "./Meals.module.css";
import CartContext from "../../store/Cart-Context";

const Meals = (props) => {
  const ctx = useContext(CartContext);

  // const [totalOrder, setTotalOrder] = useState([]);

  useEffect(() => {
    let totalQuantity = 0;
    for (let i in ctx.totalOrder) {
      totalQuantity += ctx.totalOrder[i].quantity;
    }
    props.onSubmit(totalQuantity);
  }, [ctx.totalOrder, props]);

  // function orderHandler(order) {
  //   setTotalOrder((prevState) => {
  //     for (let i in prevState) {
  //       if (prevState[i].title === order.title) {
  //         prevState[i].quantity += order.quantity;
  //         prevState[i].price += order.price;
  //         return [...prevState];
  //       }
  //     }
  //     return [...prevState, order];
  //   });
  // }

  return (
    <React.Fragment>
      {ctx.showModal && <ModalBackground></ModalBackground>}
      {ctx.showModal && <Cart totalOrder={ctx.totalOrder}></Cart>}
      <div className={style["meals"]}>
        <MealItem
          className={`${style["mealItem"]}  ${style["mealItem__1"]}`}
          title="Vegetables In Black Pepper Sauce"
          description="sautéd babycorn, broccoli, asparagus, served with purred water chestnut and greens tossed with fresh black pepper"
          price={19.99}
          onOrder={ctx.orderHandler}
        />
        <MealItem
          className={`${style["mealItem"]} ${style["mealItem__2"]}`}
          title="Fresh Basil Crunchy Taco With pesto"
          description="Creamy homemade pesto sauce made with fresh Basil and Nuts, Cherry, Tomato and Olives, Pinto Beans & Spicy Ranch Sauce"
          price={13.99}
          onOrder={ctx.orderHandler}
        />
        <MealItem
          className={`${style["mealItem"]} ${style["mealItem__3"]}`}
          title="Homemade English Breakfast"
          description="Eggs cooked with onion, peppers, tomatoes, mushroom, broccoli, and herbs served along with toasted bread"
          price={23.33}
          onOrder={ctx.orderHandler}
        />
        <MealItem
          className={`${style["mealItem"]} ${style["mealItem__4"]}`}
          title="Classic margherita pizza"
          description="Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil"
          price={12.55}
          onOrder={ctx.orderHandler}
        />
      </div>
    </React.Fragment>
  );
};

export default Meals;
