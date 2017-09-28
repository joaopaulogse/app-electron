import React, {Component} from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav>
                <div class="nav-wrapper black">
                <a href="#!" class="brand-logo left"><i className='fa fa-dashboard'></i></a>
                <ul class="right" style={{paddingRight:10}}>
                    <li>
                        <Link to='/about' children='About'/>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }

}

