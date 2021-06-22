import styled from 'styled-components';
export const Lower = styled.div`
color: #fff;
    margin-left: 8px;
 
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
`
export const Box = styled.div`
text-align:left;
padding:20px 10px;
background:  rgba(9,14,22,255) ;
 
bottom: 0;
width: 100%;


 
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
 
    width: 100%;
	margin: 0 auto;
 
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
    display: block;
    font-weight: 400;
    font-size: 12px;
    cursor: pointer;

&:hover {
	text-decoration:underline;
	color:white;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
color: #878787;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 9px;
}
`;
