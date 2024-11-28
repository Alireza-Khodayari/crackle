import styled from "styled-components";
import { pallete } from "../../theme";
export const Style = styled.div`
.header {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
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
                        display: flex;
                        gap: 5px;
                    }
                }
            }
        }
    }        
}
`