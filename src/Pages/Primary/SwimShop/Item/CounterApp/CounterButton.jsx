import styled from "styled-components";

const CounterButton = ({ children, onClick }) => {
    return (
        <CounterButtonStyled
            className="StepperButton"
            type="submit"
            onClick={onClick}
        >
            {children}
        </CounterButtonStyled>
    );
};

export default CounterButton;

const CounterButtonStyled = styled.button`
    font-size: 24px;
    padding: 8px 16px;
    color: #041e42;
    border-radius: 8px;
    border-width: 1px;
    border-color: #041e42;
    margin-bottom: 32px;

    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #f8f8f8;
    }
    &:active,
    &:focus {
        background-color: #ffffff;
    }
`;
