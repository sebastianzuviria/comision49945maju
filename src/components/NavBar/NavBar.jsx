import classes from './NavBar.module.css'

const NavBar = () => {
    console.log(classes)
    return (
        <nav>
            <h1 className={classes.h1}>Ecommerce</h1>
            <section>
                <button className={'btn btn-danger'}>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </section>
        </nav>
    )
}

export default NavBar