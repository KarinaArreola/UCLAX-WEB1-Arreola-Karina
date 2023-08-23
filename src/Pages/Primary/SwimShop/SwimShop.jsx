import styled from "styled-components";

/*Components ------------*/
import Inset from "@/Common/PagesLayout/Inset";
import ItemsList from "./SwimShopItemsList";
import shopingCart from "./img/shoping-cart.png";

const SwimShop = () => {
    return (
        <SwimShopStyled className="SwimShop">
            <Inset>
                <h1>Swim Shop</h1>
                <img className="cart" src={shopingCart} alt="shoping cart" />
                <ItemsList />
            </Inset>
        </SwimShopStyled>
    );
};

export default SwimShop;

const SwimShopStyled = styled.div`
    h1 {
        display: none;
    }

    .cart {
        width: 32px;
        margin-top: -32px;
        margin-right: 16px;
        float: right;
    }
`;
