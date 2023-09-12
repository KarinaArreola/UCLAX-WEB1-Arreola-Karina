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
                    <div key={swimShopItem.id}>
                        <Item swimShopItem={swimShopItem} zoomScale={1} />
                    </div>
                );
            })}
        </SwimShopItemsListStyled>
    );
};

export default SwimShopItemsList;

const SwimShopItemsListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 32px;
`;
