import MyButton from './styles'
import {ButtonProps} from '../../models/buttons-models'

const Button = ({children, setColor, setFontColor, type, setSize, click} : ButtonProps) => {

    return(
      <MyButton 
          setColor={setColor}
          onClick={click}
          setSize={setSize}
          setFontColor={setFontColor}
          type={type}
        >{children}
      </MyButton>
    )
}

export default Button
