import { Container } from './styles';
import { AlertModalProps } from '../../models/alertModal-models'
import Button from '../Button';

const AlertModal = ({title, subtitle, isOpen, click} : AlertModalProps) => {

    return (
        isOpen ? (
                <Container>
                    <div className='modalPlace'>
                        <h2>{title}</h2>
                        <span>{subtitle}</span>
                        <Button
                            setColor='#0192d5' 
                            setFontColor='#ffffff'
                            setSize='medium'
                            click={() => click()}
                        >Ok</Button>
                    </div>
                </Container>
            ) : (
                <div></div>
            )
    )
}

export default AlertModal;
