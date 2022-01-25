import React,{ Component} from "react";
import logo from './logo_kr.svg'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './Navi.css';

class Navi extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            naviState : false,
        }

        }
        toggle = () => {

            this.setState({

                naviState : !this.state.naviState,
            })
        }
        render(){
          //  console.log('naviState :' + this.state.naviState);
           return(
                <Navbar>
                    <NavbarBrand tag="h1">
                        <a href="">
                            <img src={logo} style={{height: 80}}></img>
                        </a>
                    </NavbarBrand>
                    <button data-state={this.state.naviState} onClick={this.toggle} id='navToggler' className="navbar-toggler d-block d-md-none"></button>
                    <Nav data-open={this.state.naviState} className="d-none d-md-flex" id='gnb' >
                        <NavItem>
                            <NavLink href="https://petbreeze.co/about-us" target='_blank' className="nmcolor">
                                Brand
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://petbreeze.co/product' target='_blank'  className="nmcolor">
                                Product         
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact"  className="evcolor"  href='#event'> 
                                Event
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact"  className="nmcolor" href='#review'>
                                Review
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://petbreeze.co/contact" target='_blank'  className="nmcolor">
                                Service
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
              )
        }
    }


export default Navi;
