import styled from "styled-components";

/*Components ------------*/
import Inset from "@/Common/PagesLayout/Inset";
import ItemsList from "./SwimShopItemsList";

const SwimShop = () => {
    return (
        <SwimShopStyled className="SwimShop">
            <Inset>
                <h1>Swim Shop</h1>
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
`;
