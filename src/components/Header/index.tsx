import { Container } from './styles';
import Logo  from '../../assets/bemol-picture.jpg'

interface HeaderProps {
    backToHomeLink?: boolean;
}

const Header = ({backToHomeLink} : HeaderProps) => {
    return (
        <Container>
            <div className='logoPlace'>
                <img src={Logo} />
            </div>

            {
                backToHomeLink ? (
                    <div className='redirectPlace'>
                        Voltar para Home
                    </div>
                ) : (
                    <div></div>
                )
            }
        </Container>
    )
}

export default Header;
