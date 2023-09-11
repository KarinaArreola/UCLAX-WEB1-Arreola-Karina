import styled from "styled-components";

/*Components ------------*/
import SizesList from "./Sizes/SizesList";
import CounterApp from "./CounterApp/CounterApp";
import Button from "@/Common/Button";

const ItemDescription = ({ swimShopItem }) => {
    const addToCart = () => {
        console.log("Add to cart");
    };

    return (
        <ItemDescriptionStyled className="ItemDescription">
            <SizesList class="size-list" swimShopItem={swimShopItem} />
            <CounterApp />
            <Button onClick={addToCart}>Add to Cart</Button>
        </ItemDescriptionStyled>
    );
};

export default ItemDescription;

const ItemDescriptionStyled = styled.div`
    color: #4c4c4c;
    padding-left: 16px;
    font-size: 16px;
    line-height: 1.5rem;
`;
