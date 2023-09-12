import styled from "styled-components";

import shopingCart from "./img/shoping-cart.png";

const Cart = () => {
    return (
        <CartStyled className="Cart">
            <img className="cart" src={shopingCart} alt="shoping cart" />
        </CartStyled>
    );
};

export default Cart;

const CartStyled = styled.div`
    .cart {
        width: 32px;
        margin-right: 16px;
        float: right;
    }
`;
