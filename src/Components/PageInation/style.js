import styled from "styled-components";

export const Style = styled.div `
ul {
    display: flex;
    justify-content: center;
    gap: 10px;
    li {
        a {
            background-color: rgba(255, 255, 255, 0.8);
            color: black;
            display: block;
            padding: 5px 10px;
            border-radius: 4px;
        }
        &.selected {
            background-color: red;
        }
    }
}
`