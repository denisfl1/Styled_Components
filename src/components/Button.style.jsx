import styled from 'styled-components'
import Button2 from './Button'
import {theme} from './themes'


export const StyledButton = styled.button`

background-color:${(prop)=> 
prop.backgroundColor ? prop.backgroundColor:'black'};
width:200px;
height:${theme.sizes.xxl};

&:hover{
    background-color:blue;
    color:white;
}
`

export const Button_2 = styled(Button2)`
background-color:lightblue;
width:200px;
height:80px;
`


const teste = 'teste'