import styled from "styled-components";

import shoppingCart from "./img/shopping-cart.png";
import CartCount from "./CartCount";

const Cart = () => {
    return (
        <CartStyled className="Cart">
            <CartCount />
            <ShopingCartWrapper>
                <img className="cart" src={shoppingCart} alt="shopping cart" />
            </ShopingCartWrapper>
        </CartStyled>
    );
};

export default Cart;

const CartStyled = styled.div``;

const ShopingCartWrapper = styled.div`
    position: relative;
    display: inline-block;

    &:hover .cart {
        /* Add hover styles for the cart icon if needed */
    }
    .cart {
        width: 32px; /* Adjust the width as needed */
        margin-right: 16px;
        float: right;
    }

    /* Positioning for CartCount */
    ${CartCount} {
        position: absolute;
        top: 0;
        right: 0;
    }
`;
