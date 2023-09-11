import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset";
import ItemsList from "./SwimShopItemsList";
import shopingCart from "./img/shoping-cart.png";

const SwimShop = () => {
    return (
        <SwimShopStyled className="SwimShop">
            <Inset>
                <img className="cart" src={shopingCart} alt="shoping cart" />
            </Inset>
            <ItemsList />
        </SwimShopStyled>
    );
};

export default SwimShop;

const SwimShopStyled = styled.div`
    .cart {
        width: 32px;
        margin-top: -16px;
        margin-right: 16px;
        float: right;
    }
`;
