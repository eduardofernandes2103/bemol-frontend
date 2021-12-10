import BackImg from '../../assets/bemol-shop.jpg'
import Container from './styles'
import Header from '../../components/Header'
import { useState } from 'react'
import Button from '../../components/Button'

const Home = () => {
    const [values, setValues] = useState("");
    const [tags, setTags] = useState<string[]>([]);

    const handlePaste = (e: any, ecurr: any) => {
        let paste;
        let newArr : string[] = [];
        let tag;

        e.preventDefault(); 
        
        paste = ecurr.replaceAll(" ", "").split(',')

        for(let i = 0; i < tags.length; i++){
            tag = tags[i]
            
            newArr.push(tag)
        }
        
        for (let i = 0; i < paste.length; i++){
            tag = paste[i]
            
            newArr.push(tag)
        }
        
        setTags(newArr)

        setValues("")
    }

    const handleRemoveTag = (tag: string) => {
        const newTags = tags.filter(t => t !== tag)
        setTags(newTags);
    }
    
    const handleValidate = (tag: string) => {
        let hashReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = false
        
        if(hashReg.test(tag)){
            result = true
        }
        return result
    }

    const handleUpdateTags = (e: any) => {
        e.preventDefault();  

        if(values.length > 0){
            if(e.key === ',' || e.key === 'Enter' || e.key === ' '){
                if(e.key === ','){
                    const newTag = values.slice(0,-1);
                    const newArr = [...tags, newTag]
                    setTags(newArr)
                } else if(e.key === 'Enter' || e.key === ' '){
                    const newTag = values;
                    const newArr = [...tags, newTag]
                    setTags(newArr)
                }
                setValues("")
            }
        }

        if(values === '' && e.key === 'Backspace'){
            const otherTags = [...tags];
            otherTags.pop();
            setTags(otherTags);
        }

    }

    const isAllValid = (tags: string[]) => {
        let result = 0
        let tag;

        for (let i = 0; i < tags.length; i++ ){
            tag = tags[i]

            if(handleValidate(tag) === false){
                result ++
            }
        }
        
        return result
    }

    const deleteAllWrongTags = (tags: string[]) => { 
        let newArr: string[] = []
        let tag: string;

        for(let i = 0; i < tags.length; i++){
            tag = tags[i]

            if(handleValidate(tag) == true){
                newArr.push(tag)
            }
        }
        setTags(newArr);
    }

    const handleRenderErrorMsg = () => {
        return (
            <div className="errorText">
                <span onClick={() => deleteAllWrongTags(tags)} style={{ color: '#E6535F' }} className={"removeTags"}>
                    Remover todos os emails com erro
                </span>
            </div>
             
        )     
    }

    return (
        <div>
            <Header />
            <Container>
                <div>
                    <img src={BackImg} alt="" />
                </div>
                <div className='shareModal'>
                    <h2>Convide seus amigos</h2>

                    <span>Insira os emails no campo abaixo</span>
                    
                    <div className='inputContainer'>
                        {tags.map((tag, i) => (
                            handleValidate(tag) === true ? (
                                <div className="validTagContainer" key={i}>
                                    <p>{tag} <span onClick={() => handleRemoveTag(tag)}> x </span></p>
                                </div>
                            ) : (
                                <div className="invalidTagContainer" key={i}>
                                    <p>                                           
                                        {tag} <span onClick={() => handleRemoveTag(tag)}> x </span>
                                    </p>
                                </div>
                            )
                        ))}
                            
                        <div>
                            <input 
                                type="text"
                                onPaste={(e) => handlePaste(e, e.clipboardData.getData("Text"))}
                                value={values}
                                onChange={(e) => setValues(e.target.value)}
                                onKeyUp={handleUpdateTags}
                                onKeyDown={(e) => e.key === 'Enter' || e.key === ',' || e.key === ' ' && e.preventDefault()}
                                onKeyPress={(e) => e.key === 'Enter' || e.key === ',' || e.key === ' ' && e.preventDefault()}
                            />
                        </div>
                    </div>

                    <div className={"error-container"}>
                        {isAllValid(tags) > 0 && handleRenderErrorMsg()}
                    </div>

                    <Button
                        setColor='#0192d5' 
                        setFontColor='#ffffff'
                        setSize='giant'
                    >Enviar</Button>
                </div>
            </Container>
        </div>
    )
}

export default Home;