import styled from "styled-components";

/*Components ------------*/
import Inset from "@/Common/PagesLayout/Inset";
import ItemsList from "./SwimShopItemsList";

const Items = () => {
    return (
        <ItemsStyled className="SwimShop">
            <Inset>
                <h1>Swim Shop</h1>
                <ItemsList />
            </Inset>
        </ItemsStyled>
    );
};

export default Items;

const ItemsStyled = styled.div``;
