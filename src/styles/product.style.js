import {css} from "@emotion/css";

export const productStyle=css`
display:inline-block;
width:200px;
min-height:300px;
padding:15px;
margin:15px;
vertical-align:top;
border:1px solid #ccc;
font-size:20px;
&:hover{
    font-weight:bold;
}
img {
    max-width: 100%;
    max-height: 100px;
}
p {
    font-size: 20px;
}
button {
    background-color: hotpink;
    color: white;
    border: 1px solid pink;
    border-radius: 5px;
    padding: 10px 15px;
    &:hover {
        background-color: pink;
    }
}
`;