import styled from "styled-components";

const Sizes = ({ sizes }) => {
    return <SizesStyled className="Sizes">{sizes}</SizesStyled>;
};

export default Sizes;

const SizesStyled = styled.table`
    margin: 8px;
    padding: 20px;
    font-size: medium;
`;
