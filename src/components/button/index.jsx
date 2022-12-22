import { ButtonContainer } from "./styles";

const Button = ({value, href, onClick, variant}) => {

return (
        <ButtonContainer variant={variant} onClick={onClick} href={href} target="_blank">{value}</ButtonContainer>   
)

}

export default Button;