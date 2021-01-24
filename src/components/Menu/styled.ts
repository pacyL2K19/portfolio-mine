import styled from 'styled-components';
// import { theme } from '../../core/theme';

export const Box = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Name = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 20px;
`
export const MenuLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const MenuLink = styled.a`
    margin-right: 20px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none
`