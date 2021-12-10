import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 175%;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .modalPlace{
        border: 0.5px solid #000025;
        border-radius: 15px;
        display: flex;
        padding: 30px 30px 42px 30px;
        min-height: 230px;
        min-width: 200px;
        max-width: 400px;
        border-radius: 10px;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff;
        opacity: 1 !important;
        justify-content: space-between;
        margin-bottom: 25rem;
    }
`

