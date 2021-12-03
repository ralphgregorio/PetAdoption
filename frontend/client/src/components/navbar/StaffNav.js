import React, {Component} from 'react';
import {StaffItems} from "./StaffItems"
import './StaffNav.css'

class StaffNavbar extends Component {
    state = { pressed: false }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">SK Pet Shelter</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                </div>
                <ul className={this.state.pressed ? 'nav-menu active' : 'nav-menu'}>
                    {StaffItems.map((item, idx)=> {
                        return (
                            <li key={idx}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        ) 
    }
    
}

export default StaffNavbar