import Button from '../../components/Button'
import Header from '../../components/Header'
import Container from './styles'
import { useState } from 'react'
import viaCepApi from '../../services/viacep-api'
import customerApi from '../../services/customer-api'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { SignupModel } from '../../models/signup-models'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate  = useNavigate()
    const [zipcode, setZipcode] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [city, setCity] = useState<string>('')

    const formSchema = yup.object().shape({
        
        name: yup
            .string()
            .required("Nome completo é obrigatório"),
        email: yup
            .string()
            .email("E-mail invalido")
            .required("E-mail é obrigatório"),          
        password_hash: yup
            .string()
            .min(8)
            .required("Senha obrigatória"),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref("password_hash")], "A senha não é a mesma")
            .required("Confirmação da senha é obrigatório"),
        zipcode: yup
            .string()
            .required("O Cep é obrigatório"),
        street: yup
            .string()
            .required("Logradouro é obrigatório"),
        city: yup
            .string()
            .required("Cidade é obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupModel>({
        resolver: yupResolver(formSchema)
    });

    const onSubFunction = ({name, email, password_hash, zipcode, street, number, complement, city }: SignupModel) => {
        const formatedNumber = Number(number)
        const costumer = {name, email, password_hash, zipcode, street, formatedNumber, complement, city };
        console.log("teste")
        customerApi
        .post("/customers", costumer)
        .then((response) => console.log(response))
        .then((_) => {
            
            return  navigate("/")
        })
        .catch((_)=> console.log("Algo não está certo, tente novamente!"))
    }


    const handleGenerateAddress = () => {
        if(zipcode.length === 8 && typeof(Number(zipcode)) === typeof(0)){
            viaCepApi
                .get(`/ws/${zipcode}/json`)
                .then((response) => {
                    setStreet(response.data.logradouro)
                    setCity(response.data.localidade)
                })
        }
        if(zipcode.length !== 8){
            setStreet('')
            setCity('')
        }
    }

    return (
        <div>
            <Header backToHomeLink={true} />
            <Container>
                <h1>Dados Cadastrais</h1>
                <form onSubmit={handleSubmit(onSubFunction)}>
                    <div className='PersonalData'>
                        <h2>Dados Pessoais</h2>
                        <div className='formPlaceOne'>
                            <div className='emailPlace'>
                                <input 
                                    placeholder='Nome Completo'
                                    {...register("name")}
                                    name="name" 
                                />
                                <input 
                                    placeholder='Email' 
                                    {...register("email")}
                                    name="email" 
                                />
                            </div>
                            <div className='passwordPlace'>
                                <input 
                                     type="password" 
                                    placeholder='Senha'
                                    {...register("password_hash")}
                                    name="password_hash" 
                                />
                                <input 
                                    type="password" 
                                    placeholder='Confirme sua senha'
                                    {...register("passwordConfirm")}
                                    name="passwordConfirm" 
                                />
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
                                {...register("zipcode")}
                                name="zipcode" 
                                placeholder='CEP (Apenas digitos)'
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                onKeyUp={handleGenerateAddress}
                            />
                            <span>O Cep deve conter apenas<br />8 digitos</span>
                            <div className="address">
                                <input 
                                    {...register("street")}
                                    name="street" 
                                    placeholder='Logradouro'
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <input 
                                    {...register("number")}
                                    name="number" 
                                    placeholder='Número'
                                />
                                <input
                                    {...register("complement")}
                                    name="complement" 
                                    placeholder='Complemento'
                                />
                                <input 
                                    {...register("city")}
                                    name="city" 
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