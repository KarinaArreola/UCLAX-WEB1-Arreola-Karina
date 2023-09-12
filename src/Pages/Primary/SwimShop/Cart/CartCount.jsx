import styled from "styled-components";

const CartCount = () => {
    return <CartCountStyled className="CartCount">1</CartCountStyled>;
};

export default CartCount;

const CartCountStyled = styled.div`
    width: 20px; /* Adjust the size of the circle */
    height: 20px; /* Adjust the size of the circle */
    background-color: red;
    color: white;
    border-radius: 50%; /* Create a circular shape */
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.75rem;
`;
