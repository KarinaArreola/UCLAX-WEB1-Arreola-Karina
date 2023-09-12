import styled from "styled-components";
import shoppingCart from "../img/shopping-cart.png";
import CartCount from "./CartCount";

const Cart = () => {
    return (
        <CartStyled className="Cart">
            <ShopingCartWrapper>
                <img className="cart" src={shoppingCart} alt="shopping cart" />
                <CartCountStyled>
                    <CartCount />
                </CartCountStyled>
            </ShopingCartWrapper>
        </CartStyled>
    );
};

export default Cart;

const CartStyled = styled.div``;

const ShopingCartWrapper = styled.div`
    position: relative; /* Make this container relative */
    .cart {
        width: 32px;
        margin-right: 32px;
        float: right;
    }
`;

const CartCountStyled = styled.div`
    position: absolute; /* Make CartCount absolute */
    top: -8px; /* Adjust the top value to position it above the cart image */
    right: 20px;
`;
