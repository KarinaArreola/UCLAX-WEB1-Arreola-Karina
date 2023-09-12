import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset";
import ItemsList from "./SwimShopItemsList";
import Cart from "./Cart";

const SwimShop = () => {
    return (
        <SwimShopStyled className="SwimShop">
            <Inset>
                <Cart />
            </Inset>
            <Inset>
                <ItemsList />
            </Inset>
        </SwimShopStyled>
    );
};

export default SwimShop;

const SwimShopStyled = styled.div``;
