import './Button.css'

const Button = ({ action }) => {
    return  <button
                className='Button'
               onClick={action}
            >
            </button>
}

export default Button 
