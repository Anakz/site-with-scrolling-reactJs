import styled from "styled-components";
import { Link } from "react-scroll";
import {webcolor} from '../components/webcolor'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => ( primary ? webcolor : '#010606' )};
    white-space: nowrap;
    padding: ${({big}) => ( big ? '14px 48px' : '12px 30px' )};
    color: ${({dark}) => ( dark ? '#010606' : '#fff' )};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition : all 0.2s ease-in-out;

    &:hover{
        transition : all 0.2s ease-in-out;
        background: ${({primary}) => ( primary ? '#fff' : webcolor )};
        transform: scale(1.05);
    }
`;