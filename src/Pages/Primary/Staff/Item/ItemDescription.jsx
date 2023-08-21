import styled from "styled-components";

/*Components ------------*/
import SizesList from "./Sizes/SizesList";

const Item = ({ member }) => {
    return (
        <ItemStyled className="Item">
            <div className="description">
                <b>Description: </b>
                {member.description}
            </div>
            <SizesList member={member} />
            <div className="price">
                <b>Price: </b>
                {member.price}
            </div>
            <div>
                <BuyButton type="submit">Add to Cart</BuyButton>
            </div>
        </ItemStyled>
    );
};

export default Item;

const ItemStyled = styled.div`
    padding: 20px;
    font-size: 14px;
    line-height: 1.5rem;
`;

const BuyButton = styled.button`
    /* Add your button styling here */
    background-color: #041e42;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 16px;
`;
