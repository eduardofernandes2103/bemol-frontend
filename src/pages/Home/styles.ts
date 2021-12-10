import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    height: 100vh;
    width: 100vw;

    img{
        position: absolute;
        left: 0px;
        top: 50px;
        z-index: -1;
        opacity: 0.4;
        width: 100vw;
        height: 90%;
    }

    .shareModal{
        margin-top: 10rem;
        width: 600px;
        height: 350px;
        border-radius: 15px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .inputContainer{
            border-radius: 4px;
            border: solid 1px #c4c4c4;
            padding: 8px 18px;
            padding-top: 0.8rem;
            width: 80%;
            max-heigth: 35%
            margin: 12px 0 8px 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            overflow: scroll;
            overflow-y: auto;
            scroll-behavior: auto;

            input{
                border: none;
            }

            input:focus {
                box-shadow: 0 0 0 0;
                outline: 0;
            }

            &::-webkit-scrollbar {
                width: 3px;
                height: 3px;
            }
        
            &::-webkit-scrollbar-thumb {
                background-color: #6E7475;
                border-radius: 20px;
            }
        
            scrollbar-width: thin;
            scrollbar-color: #f8f9fa #6E7475;
        }

        .validTagContainer{
            background: #9BDEFF;
            color: #1D1E1F;
            border-radius: 16px;
            padding-left: 0.5rem; 
            padding-right: 0.5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin-right: 0.5rem;
            margin-bottom: 0.55rem;
            width: auto;
            min-width: 0.5rem;
            max-height: 1.7rem;
            &:hover {
                background-color: #9BDEFE;
                opacity: 0.85;
            }
        
            span{
                margin-left: 0.15rem;
                color: #3A71AB;
                cursor: pointer;
            }
        }

        .invalidTagContainer {
            background: #FFD4D8;
            color: #1D1E1F;
            border-radius: 16px;
            padding-left: 0.5rem; 
            padding-right: 0.5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-content: center;
            align-items: center;
            margin-right: 0.5rem;
            margin-bottom: 0.55rem;
            width: auto;
            min-width: 0.5rem;;
            max-height: 1.7rem;
            &:hover {
                background-color: #FFD4D7;
                opacity: 0.85;
            }
        
            span{
                margin-left: 0.15rem;
                color: #E6535F;
                cursor: pointer;
            }       
        }

        .errorText{
            margin-bottom: 0px;

            .removeTags{
                cursor: pointer;
            }
        }

        .icon {
            cursor: pointer;
            margin-left: auto;
            margin-right: 5px;
        }
    }
`

export default Container