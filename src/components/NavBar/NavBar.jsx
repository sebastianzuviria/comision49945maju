import classes from './NavBar.module.css'
import Button from '../Button/Button'

const NavBar = () => {
    console.log(classes)
    return (
        <nav>
            <h1 className={classes.h1}>Ecommerce</h1>
            <section>
                <Button label={'home'} handleClick={() => console.log('Home')}/>
                <Button label={'About us'} handleClick={() => console.log('About')}/>
                <Button label={'Contact'} handleClick={() => console.log('Conctact')}/>
            </section>
        </nav>
    )
}

export default NavBar