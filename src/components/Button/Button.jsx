import './styles.css'

function Button({type = "button", name, children}) {
  return <button className='button-component' type="button">
    {name ? name : children}   
  </button>;
}

export default Button;