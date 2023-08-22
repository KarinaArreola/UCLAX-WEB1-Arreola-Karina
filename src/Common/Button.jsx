import styled from "styled-components";

const Button = ({ children, onClick }) => {
    return (
        <ButtonStyled className="Button" type="submit" onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;

const ButtonStyled = styled.button`
    background-color: #041e42;
    padding: 10px 5px;
    color: white;
    width: 150px;
    border: none;
    outline: none;

    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #00b3e4;
    }
    &:active,
    &:focus {
        background-color: #00b3e4;
    }
`;
