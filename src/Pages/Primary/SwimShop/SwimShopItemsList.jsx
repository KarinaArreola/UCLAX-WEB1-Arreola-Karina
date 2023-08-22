import styled from "styled-components";

/* Data ------------*/
import { swimShopData } from "./swimShopData";

/*Components ------------*/
import Item from "./Item/Item";

const SwimShopItemsList = () => {
    return (
        <SwimShopItemsListStyled className="SwimShopItemsList">
            {swimShopData.map((swimShopItem) => {
                return (
                    <Item key={swimShopItem.id} swimShopItem={swimShopItem} />
                );
            })}
        </SwimShopItemsListStyled>
    );
};

export default SwimShopItemsList;

const SwimShopItemsListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;
