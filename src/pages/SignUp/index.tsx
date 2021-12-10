import Button from '../../components/Button'
import Header from '../../components/Header'
import Container from './styles'
import { useState } from 'react'

const SignUp = () => {
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
                            <input placeholder='CEP (Apenas digitos)'/>
                            <span>O Cep deve conter apenas<br />8 digitos</span>
                            <Button 
                                setColor='#c4c4c4'
                                setFontColor='#000000'
                                setSize='large'
                            >Gerar Endereço</Button>
                            <div className="address">
                                <input placeholder='Rua'/>
                                <input placeholder='Número'/>
                                <input placeholder='Complemento'/>
                                <input placeholder='Cidade'/>
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