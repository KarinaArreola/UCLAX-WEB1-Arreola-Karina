import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset";
import ItemsList from "./SwimShopItemsList";
import Cart from "./Cart";

const SwimShop = () => {
    return (
        <SwimShopStyled className="SwimShop">
            <ContentWrapper>
                <Cart />
                <ItemsList />
            </ContentWrapper>
        </SwimShopStyled>
    );
};

export default SwimShop;

const SwimShopStyled = styled.div``;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Align children to the right within the column */
    padding-top: 16px;
`;
