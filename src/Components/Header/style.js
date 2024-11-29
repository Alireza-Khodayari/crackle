import styled from "styled-components";
import { pallete } from "../../theme";
export const Style = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    backdrop-filter: blur(20px);
    .header-inner {
        .logo {
            img {
                width: 110px;
            }
        }
        .menu {
            ul {
                li {
                    a {
                        div {
                            display: flex;
                            gap: 5px;
                        }
                    }
                }
            }
        }
    }
`