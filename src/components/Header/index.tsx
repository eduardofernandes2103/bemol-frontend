import { Container } from './styles';
import Logo  from '../../assets/bemol-picture.jpg'
import { HeaderProps } from '../../models/header-models'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Header = ({backToHomeLink} : HeaderProps) => {
    const navigate  = useNavigate()
     
    const handleNavigation = (path: string) => {
        navigate(path)
    }

    return (
        <Container>
            <div className='logoPlace'>
                <img src={Logo} />
            </div>

            {
                backToHomeLink ? (
                    <Button 
                        setSize='huge'
                        setColor='#ffffff'
                        setFontColor='#0192d5'
                        click={() => handleNavigation("/")}
                    >Início</Button>
                ) : (
                    <Button 
                        setSize='huge'
                        setColor='#ffffff'
                        setFontColor='#0192d5'
                        click={() => handleNavigation("/signup")}
                    >Cadastre-se</Button>
                )
            }
        </Container>
    )
}

export default Header;
