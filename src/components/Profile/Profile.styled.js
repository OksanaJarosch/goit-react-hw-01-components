import styled from 'styled-components';

export const ProfileWrapper = styled.div`
max-width: 250px;
height: 370px;
margin: 20px;
margin-bottom: 70px;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 8px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
    overflow: hidden;
`;

export const PersonWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
height: 300px;
padding: 16px;
`;


export const PhotoWrapper = styled.div`
width: 120px;
height: 120px;
margin-bottom: 20px;
border: 1px solid #bbbaba87;
border-radius: 50%;
overflow: hidden;
`;

export const PersonName = styled.p`
font-size: 24px;
margin: 0;
`;

export const PersonData = styled.p`
font-size: 16px;
color: grey;
margin: 0;
`;