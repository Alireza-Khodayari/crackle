import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    direction: ltr;
    font-family: 'Sora';
    background-color: #000;
    color: #fff;
}
ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
}
*, *:before, *:after {
    box-sizing: border-box;
}
.full-container {
    width: 100%;
    padding: 0 15px;
}
.container {
    width:100%;
    padding: 0 50px;
}
a {
    text-decoration: none;
}
.h-full {
    height:100%;
}
.relative {
    position: relative;
}
.flex {
    display: flex;
}
.space-between {
    justify-content: space-between;
}
.justify-center {
    justify-content: center;
}
.flex-wrap {
    flex-wrap: wrap;
}
.align-center {
    align-items: center;
}
.gap-5 {
    gap: 5px;
}
.gap-10 {
    gap: 10px;
}
.gap-15 {
    gap: 15px;
}
.gap-20 {
    gap: 20px;
}
.gap-40 {
    gap: 40px;
}
`