import styled from "styled-components";

const Price = ({ swimShopItem }) => {
    return (
        <PriceStyled className="Price">
            <h5>{swimShopItem.msrp}</h5>
            <h4>{swimShopItem.price}</h4>
        </PriceStyled>
    );
};

/*_______*/

export default Price;

const PriceStyled = styled.div`
    h4 {
        font-size: 24px;
        line-height: 2rem;
        color: red;
        margin-top: 16px;
        font-weight: bold;
        border: 10px;
    }

    h5 {
        font-size: 16px;
        margin-bottom: -16px;
        text-decoration: line-through;
    }
`;
