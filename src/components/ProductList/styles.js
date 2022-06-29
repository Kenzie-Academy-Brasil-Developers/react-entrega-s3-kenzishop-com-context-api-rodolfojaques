
import styled from "styled-components";

export const ListMain = styled.ul`
list-style: none;

width: 90%;
display: flex;

overflow-x: auto;
padding: .8rem;
gap: .8rem;

margin: 30px auto 0 auto;

@media(min-width: 950px){
    justify-content: center;
}
`;