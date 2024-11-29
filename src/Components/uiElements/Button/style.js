import styled from "styled-components";
import {pallete} from "../../../theme";
export const Style = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;
    height: ${(props) => (props.size == "large" ? "56px" : "40px")};
    a {
        width: calc(100% - 8px);
        height: ${(props) => (props.size == "large" ? "48px" : "32px")};
        border-radius: ${pallete.defaultRadius};
        border: 1px solid transparent;
        padding: ${(props) => (props.size == "large" ? "10px 20px" : "7px 10px")};
        font-size: ${(props) => (props.size === "large" ? "1rem" : "0.9rem")};
        text-transform: capitalize;
        display: ${(props) => props.block == "block" ? "block" : "flex"};
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        transition-property: color, opacity, border, margin, padding, width, height;
        transition-duration: 70ms;
        transition-timing-function: ease-in-out;
        border: ${(props) => 
            props.type == "primary"
            ? "2px solid transparent"
            : props.type == "dark"
            ? "2px solid #eaf6ff26"
            : "2px solid transparent"};
        background-color: ${(props) => 
            props.type == "primary"
            ? pallete.primary
            : props.type == "dark"
            ? pallete.dark
            : "transparent"};
        color: ${(props) => 
            props.type == "primary"
            ? pallete.dark
            : props.type == "dark"
            ? pallete.primary
            : pallete.defaultBtnColor};
        // &.primary {
        //     background-color: ${pallete.primary};
        //     color: ${pallete.dark};
        // }
        // &.dark {
        //     background-color: ${pallete.dark};
        //     color: ${pallete.primary};
        //     border-color: ${pallete.defaultBtnColor}
        // }
        // &.default {
        //     background-color: transparent;
        //     color: ${pallete.defaultBtnColor};
        //     &:hover {
        //         background-color: ${pallete.primary};
        //         color: #fff;
        //     }
        // }
        &.block {
            display: inline-block;
            text-align: center;
        }
        // &.large {
        //     padding: 10px 20px;
        // }
        &.bold {
            font-weight: 600;
        }
        .with-icon {
            display: flex;
            gap: 3px;
        }
        &:hover {
            width: 100%;
            height: 100%;
            background-color: ${(props) => 
                props.type == "primary"
                ? pallete.primary
                : props.type == "dark"
                ? pallete.dark
                : pallete.dark};
            border-color: ${(props) => 
                props.type == "primary"
                ? "transparent"
                : props.type == "dark"
                ? pallete.primary
                : "#eaf6ff66"};
        }
    }
`