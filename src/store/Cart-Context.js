import React, { useState } from "react";

const CartContext = React.createContext({
  showModal: false,
  triggerModal: () => {},
  closeModal: () => {},
  totalOrder: 0,
  orderHandler: () => {},
  incQuan: () => {},
  decQuan: () => {},
});

export const CartContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  function triggerModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  const [totalOrder, setTotalOrder] = useState([]);

  function orderHandler(order) {
    setTotalOrder((prevState) => {
      for (let i in prevState) {
        if (prevState[i].title === order.title) {
          prevState[i].quantity += order.quantity;
          prevState[i].price += order.price * order.quantity;
          return [...prevState];
        }
      }
      return [
        ...prevState,
        {
          quantity: order.quantity,
          title: order.title,
          price: order.price * order.quantity,
        },
      ];
    });
  }

  function incQuan(order) {
    setTotalOrder((prevState) => {
      for (let i in prevState) {
        if (prevState[i].title === order.title) {
          prevState[i].quantity += 1;
          console.log(order.price);
          prevState[i].price += order.price;
          return [...prevState];
        }
      }
      return;
    });
  }

  function decQuan(order) {
    setTotalOrder((prevState) => {
      for (let i in prevState) {
        if (prevState[i].title === order.title) {
          prevState[i].quantity -= 1;
          prevState[i].price -= order.price;
          return [...prevState];
        }
      }
      return;
    });
  }

  return (
    <CartContext.Provider
      value={{
        showModal: showModal,
        triggerModal: triggerModal,
        closeModal: closeModal,
        totalOrder: totalOrder,
        orderHandler: orderHandler,
        incQuan: incQuan,
        decQuan: decQuan,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
