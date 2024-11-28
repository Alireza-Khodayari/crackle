import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.a`

    border-radius: ${pallete.defaultRadius};
    border: 1px solid transparent;
    padding: 5px 10px;
    text-transform: capitalize;
    display: inline-block;

    &.primary {
        background-color: ${pallete.primary};
        color: ${pallete.dark};
    }
    &.default {
        background-color: transparent;
        color: ${pallete.defaultBtnColor};
        &:hover {
            background-color: ${pallete.primary};
            color: #fff;
        }
    }
    &.dark {
        background-color: ${pallete.dark};
        color: ${pallete.primary};
        border-color: ${pallete.defaultBtnColor}
    }
    &.block {
        display: inline-block;
        text-align: center;
    }
    &.large {
        padding: 10px 20px;
    }
    &.bold {
        font-weight: 600;
    }
    .with-icon {
        display:flex;
        gap: 3px;
    }
`