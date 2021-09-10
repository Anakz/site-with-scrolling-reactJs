import styled from "styled-components";
import { Link } from "react-router-dom";
import { webcolor } from "../webcolor";

export const Container = styled.div`
    // min-height: 860px;
    background: #010606;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const Wrap = styled.div`
    display: grid;
    z-index: 1;
    height: 720px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        height: 940px;
    }
    @media screen and (max-width: 400px){
        height: 720px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({imgStart}) =>(!imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) =>(!imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2' `)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const FormWrap = styled.div`
    background: grey;
    // min-height: 692px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const FormContent = styled.div`
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Form = styled.form`
    background: ${webcolor};
    // max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 40px 32px;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 14px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #000;
    color: #fff;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.01);
        background: #242424;
    }
`;

export const FormLink = styled(Link)`
    margin-top: 24px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #424242;
        // transform: scale(1.05);
    }
`;

export const ImgWrap = styled.div`
    // max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-tight: 0;
`;