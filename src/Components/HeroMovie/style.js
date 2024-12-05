import styled from "styled-components";

export const Style = styled.div `
.hero-movie {
    position: relative;
    width: 100%;
    .children {
        position: relative;
        z-index: 6;
    }
    .poster {
        width: 100%;
        height: 100%;
        height: 580px;
        background-size: cover;
        background-position: top center;
        position: absolute;
        left: 0;
        top: 0;
    }
    .content {
        z-index: 1;
        .title {
            color: #fff;
            font-size: 3rem;
            text-transform: capitalize;
            margin-bottom: 10px
        }
        .age {
            background-color: #000;
            padding: 5px;
            border: 1px solid #101010;
            border-radius: 4px;
            color: #fff;
            font-weight: 600;
            font-size: 0.8rem;
        }
        .genres {
            color: #fff;
            text-transform: capitalize;
            font-size: 0.8rem;
        }
        .btn-group {
            margin: 30px 0;
        }
        .description {
            color: #fff;
            max-width: 800px;
            p {
                font-weight: 500;
                line-height: 1.5rem;
            }
        }
    }
    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6)
    }
}
`
