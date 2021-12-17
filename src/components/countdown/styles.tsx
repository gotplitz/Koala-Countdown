import styled from 'styled-components';

export const StyledCountdown = styled.div`
    background: ${(props) => props.theme.global.body_color};
    font-family: ${(props) => props.theme.primary_font_family.light};
    text-align: center;
`;

export const HeaderContainer = styled.div`
    background: ${(props) => props.theme.header.background_color};
    border-top: 5px solid ${(props) => props.theme.global.body_color};
    width: 90%;
    max-width: 1500px;
    margin: auto;
    padding: 20px 0;
    text-align: center;
    .logo {
        width: 100%;
        height: auto;
        max-width: 280px;
        @media only screen and (max-width: 768px) {
            max-width: 200px;
        }
        @media only screen and (max-width: 414px) {
            max-width: 150px;
        }
    }
`;

export const Section = styled.div`
    width: 90%;
    max-width: 1500px;
    margin: auto;
    padding: 70px 0;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.text.primary_text_color};
    font-family: ${(props) => props.theme.primary_font_family.bold};
`;

export const ThirdHeader = styled.h3`
    color: ${(props) => props.theme.text.primary_text_color};
    font-family: ${(props) => props.theme.primary_font_family.bold};
    font-size: 38px;
    text-align: center;
    @media only screen and (max-width: 768px) {
        font-size: 32px;
    }
    @media only screen and (max-width: 414px) {
        font-size: 28px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const FourColumns = styled.div`
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
    @media only screen and (max-width: 414px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export const EightColumns = styled.div`
    flex: 0 0 66.6666%;
    max-width: 66.6666%;
    @media only screen and (max-width: 414px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export const DatePickerContainer = styled.div`
    input {
        padding: 10px 30px;
        width: 90%;
        max-width: 250px;
    }
`;

export const NumbersContainer = styled.div`
    input {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 30px;
    }
`;

export const CountdownWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CdownItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    .time {
        color: ${(props) =>
            props.theme.buttons.primary_button_background_color};
        font-size: 28px;
        font-weight: 800;
    }
`;

export const Button = styled.button`
    background-color: ${(props) =>
        props.theme.buttons.primary_button_background_color};
    border: 1px solid
        ${(props) => props.theme.buttons.primary_button_border_color};
    border-radius: ${(props) =>
        props.theme.buttons.primary_button_border_radius}px;
    color: ${(props) => props.theme.buttons.primary_button_text_color};
    cursor: pointer;
    padding: 10px 30px;
    transition: all 0.5s ease-out;
    &: hover {
        background-color: ${(props) =>
            props.theme.buttons.secondary_button_background_color};
        border: 1px solid
            ${(props) => props.theme.buttons.secondary_button_border_color};
        border-radius: 15px;
        color: ${(props) => props.theme.buttons.secondary_button_text_color};
        transition: all 0.3s ease-in;
    }
`;
