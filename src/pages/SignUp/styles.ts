import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    height: 160vh;
    width: 100vw;

    .opacityOn{
        background: #c4c4c4;
        opacity: 0.5;
    }

    input{
        width: 12rem;
        height: 1.8rem;
        border-radius: 5px;
        border: 1px solid #c4c4c4;
        padding-left: 0.5rem;
    }

    h1{
        margin-top: 2rem;
    }

    .PersonalData{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .formPlaceOne{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 450px;
    
            input{
                margin-bottom: 1.5rem;
            }
    
            .emailPlace{
                display: flex;
                flex-direction: column;
            }
            .passwordPlace{
                display: flex;
                flex-direction: column;
            }
        }
    }

    .AddressData{

        display: flex;
        flex-direction: column;
        justify-content: center;
 
        .formPlaceTwo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
    
            a{
                text-decoration: none;
                margin-bottom: 1rem;
                color: #0192d5;
            }
    
            input{
                margin-bottom: 0.5rem;
            }
    
            span{
                margint-bottom: 1rem;
            }
    
            .address{
                margin-top: 2.5rem; 
                margin-bottom: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;

                input{
                    margin-bottom: 1.5rem;
                }
            }
        }
        
    }

`

export default Container