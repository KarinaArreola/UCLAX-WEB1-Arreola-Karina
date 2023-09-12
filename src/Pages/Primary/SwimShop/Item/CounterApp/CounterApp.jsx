import styled from "styled-components";
import React, { useState } from "react";
import CounterButton from "./CounterButton";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="counter">
            <CounterButton onClick={decrement} disabled={count === 0}>
                {" "}
                -{" "}
            </CounterButton>
            <StyledCount>{count}</StyledCount>
            <CounterButton onClick={increment}> + </CounterButton>
        </div>
    );
};

export default CounterApp;

const ItemStyled = styled.div`
    h1 {
        margin-bottom: 16px;
    }
`;

const StyledCount = styled.b`
    font-size: 20px;
    margin: 16px;
`;
