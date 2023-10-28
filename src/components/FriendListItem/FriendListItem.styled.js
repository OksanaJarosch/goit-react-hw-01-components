import styled from 'styled-components';

const getStatus = ({$online}) => {
return $online ? "#35A053" : "#B52D2D";
}

export const Friend = styled.li`
display: flex;
align-items: center;
gap: 20px;
height: 56px;
padding: 8px;
margin-bottom: 8px;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 8px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const OnlineStatus = styled.span`
width: 18px;
height: 18px;
border-radius:50%;
background-color: ${getStatus};
`;