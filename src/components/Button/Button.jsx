const Button = (props) => {
    console.log(props)
    return <button onClick={props.handleClick} style={{ color: 'red'}}>{props.label}</button>
}

export default Button