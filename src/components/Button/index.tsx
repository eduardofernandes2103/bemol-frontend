import MyButton from './styles'
import {ButtonProps} from '../../models/buttons-models'

const Button = ({children, setColor, setSize, click} : ButtonProps) => {

    return(
      <MyButton 
          setColor={setColor}
          onClick={click}
          setSize={setSize}
        >{children}
      </MyButton>
    )
}

export default Button
