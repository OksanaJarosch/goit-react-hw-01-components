import styled from 'styled-components';


const getColor = (props) => {
    switch (props.$variant){
        case ".docx":
        return "#fceae9";
        case ".pdf":
        return "#e9eafc";
        case ".mp3":
        return "#eafce9";
        case ".psd":
        return "#fcf6e9";
       default:
        return "#cdcdcd";
    }
}

export const StatSection = styled.div`
max-width: 350px;
margin: 20px;
margin-bottom: 70px;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 8px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    text-align: center;
`;

export const Titel = styled.h2`
margin: 20px;
text-transform: uppercase;
font-size: 24px;
`;

export const StatList = styled.ul`
display: flex;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
padding: 8px;
padding-bottom: 25px;
border: 1px solid #bbbaba87;
width: 20%;
background-color: ${getColor};
`;