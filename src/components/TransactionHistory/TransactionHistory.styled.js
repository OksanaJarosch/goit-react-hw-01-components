import styled from "styled-components";

export const TransTable = styled.table`
width: 400px;
margin: 20px;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 4px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    text-align: center;
    border-collapse: collapse;
`;

export const TableHead = styled.thead`
background-color: #35A085;
color: white;
text-transform: uppercase;
`;

export const HeadItem = styled.th`
padding: 16px;
width: 34%;
border: 1px solid white;
`;

export const Item = styled.td`
padding: 4px;
border: 1px solid rgba(0, 0, 0, 0.1);
`;