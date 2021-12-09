import Header from '../../components/Header'
import BackImg from '../../assets/bemol-shop.jpg'
import Container from './styles'

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <div>
                    <img src={BackImg} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Home;