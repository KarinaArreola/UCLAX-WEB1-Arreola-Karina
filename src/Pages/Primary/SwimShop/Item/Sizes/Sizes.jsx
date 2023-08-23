import styled from "styled-components";

const Sizes = ({ sizes }) => {
    return <SizesStyled className="Sizes">{sizes}</SizesStyled>;
};

export default Sizes;

const SizesStyled = styled.div`
    /* display: block | inline | inline-block */
    display: inline-block;

    margin: 4px;
    padding: 8px 12px;
    font-size: 16px;
    border: solid 1px #c4c4c4;
`;
