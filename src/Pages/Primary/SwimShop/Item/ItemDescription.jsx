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
        </ItemStyled>
    );
};

export default Item;

const ItemStyled = styled.div`
    padding: 20px;
    font-size: 14px;
    line-height: 1.5rem;
`;
