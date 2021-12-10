import Button from '../../components/Button'
import Header from '../../components/Header'
import Container from './styles'
import { useState } from 'react'
import viaCepApi from '../../services/viacep-api'

const SignUp = () => {
    const [cep, setCep] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [city, setCity] = useState<string>('')

    const handleGenerateAddress = () => {
        if(cep.length === 8 && typeof(Number(cep)) === typeof(0)){
            viaCepApi
                .get(`/ws/${cep}/json`)
                .then((response) => {
                    setStreet(response.data.logradouro)
                    setCity(response.data.localidade)
                })
        }
        if(cep.length !== 8){
            setStreet('')
            setCity('')
        }
    }

    return (
        <div>
            <Header backToHomeLink={true} />
            <Container>
                <h1>Dados Cadastrais</h1>
                <form >
                    <div className='PersonalData'>
                        <h2>Dados Pessoais</h2>
                        <div className='formPlaceOne'>
                            <div className='emailPlace'>
                                <input placeholder='Nome Completo' />
                                <input placeholder='Email' />
                            </div>
                            <div className='passwordPlace'>
                                <input placeholder='Senha'/>
                                <input placeholder='Confirme sua senha'/>
                                <span>A senha com pelo menos<br />8 caracteres</span>
                            </div>
                        </div>
                    </div>
                    <div className='AddressData'>
                        <h2>Endereço</h2>
                        <div className='formPlaceTwo'>
                            <a 
                                href='https://buscacepinter.correios.com.br/app/endereco/index.php?t'
                                target="_blank"
                            >Buscar meu cep</a>
                            <input 
                                placeholder='CEP (Apenas digitos)'
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                onKeyUp={handleGenerateAddress}
                            />
                            <span>O Cep deve conter apenas<br />8 digitos</span>
                            <div className="address">
                                <input 
                                    placeholder='Rua'
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <input placeholder='Número'/>
                                <input placeholder='Complemento'/>
                                <input 
                                    placeholder='Cidade'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <Button 
                        setColor='#0192d5'
                        setFontColor='#ffffff'
                        setSize='huge'
                        type='submit'
                    >Enviar</Button>
                </form>
            </Container>
        </div>
    )
}

export default SignUp;