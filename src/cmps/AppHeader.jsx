
import { NavLink } from 'react-router-dom'


export function AppHeader() {
    return (
        <header className="app-header">
            <section className="header-container">
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                </nav>
            </section>
        </header>
    )
}
