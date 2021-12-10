import AlertModal from '../../components/AlertModal'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Container from './styles'
import customerApi from '../../services/customer-api'
import viaCepApi from '../../services/viacep-api'
import * as yup from 'yup';
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { SignupModel } from '../../models/signup-models'
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'; 


const SignUp = () => {
    const navigate  = useNavigate()
    const [city, setCity] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [zipcode, setZipcode] = useState<string>('')
    const [modalTitle, setModalTitle] = useState<string>('')
    const [modalSubTitle, setModalSubTitle] = useState<string>('')
    const [backgroundClass, setBackgroundClass] = useState<string>("opacityOff")
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [modalReload, setModalReload] = useState<boolean>(false)

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
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupModel>({
        resolver: yupResolver(formSchema)
    });

    const onSubFunction = ({name, email, password_hash, zipcode, number, complement }: SignupModel) => {

        const costumer = {name, email, password_hash, zipcode, street, number, complement, city };
        console.log(street)
        customerApi
        .post("/customers", costumer)
        .then((response) => {
            console.log(typeof(response.data.error))
            if(typeof(response.data.error) !== typeof("string")){
                setModalIsOpen(true)
                setModalReload(false)
                setModalTitle("Parabéns")
                setModalSubTitle("seus dados foram cadastrados com sucesso!")
                setBackgroundClass("opacityOn")
                window.scrollTo(0, 0)
            } else {
                setModalIsOpen(true)
                setModalReload(true)
                setModalTitle("Atenção")
                setModalSubTitle("O e-mail já foi cadastrado anteriormente")
                setBackgroundClass("opacityOn")
                window.scrollTo(0, 0)
            }
        })
        .catch((_)=> {
            toast.error("Algo deu errado, reinicie a página e tente novamente")
        })
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

    const handleModalNavigation = (reload: boolean ) => {
        if(reload){
            document.location.reload()
        } else {
            navigate("/")
        }
    }

    const handleToastify = () => {
        toast.error(errors.name?.message)
        toast.error(errors.email?.message)
        toast.error(errors.password_hash?.message)
        toast.error(errors.passwordConfirm?.message)
        toast.error(errors.zipcode?.message)
    }

    return (
        <div>
            <Header backToHomeLink={true} />
            <ToastContainer />
            <Container>
                <AlertModal 
                    isOpen={modalIsOpen}
                    subtitle={modalSubTitle}
                    title={modalTitle}
                    click={() => handleModalNavigation(modalReload)}
                />
                <div className={backgroundClass}>
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
                            click={() => handleToastify()}
                        >Enviar</Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default SignUp;