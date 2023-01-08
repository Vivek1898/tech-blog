import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import ".././node_modules/nprogress/nprogress.css";
import Search from "./blog/Search";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>

      {/* <Navbar color="light" light expand="md" navbar className="fixed-top stick">
        <Link href="/">
          <NavLink className="font-weight-bold ">AcodeDaily</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
        
            <React.Fragment>
             

             <NavItem>
               <Link href="/">
                 <NavLink className="hidden-xs">Blog</NavLink>
               </Link>
             </NavItem>
           </React.Fragment>
           <React.Fragment>
             

             <NavItem>
               <Link href="/contact">
                 <NavLink className="hidden-xs">Contact</NavLink>
               </Link>
             </NavItem>
           </React.Fragment>

            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/viewer">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
              
            )}
             {isAuth() && isAuth().role === 2 && (
              <NavItem>
                <Link href="/editor">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
              
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}
  {isAuth() && isAuth().role === 1 && (
    <NavItem>
              <a href="/user/crud/blog" className="btn btn-primary text-light">
                Write a blog
              </a>
            </NavItem>
  )}
<NavItem>

<div  className="check">
      <Search />
      </div>
</NavItem>

          </Nav>
        </Collapse>
      </Navbar> */}

      <div class="navManual fixed-top stick">
        <input type="checkbox" id="navManual-check"/>
        <div class="navManual-header">
          <div class="navManual-title">
          <Link href="/">
            AcodeDaily
            </Link>
          </div>
        </div>
        <div class="navManual-btn">
          <label for="navManual-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="navManual-links">
            <ul>
          <li>   <Link href="/">
                 <a className="hidden-xs">Blog</a>
               </Link>
               </li>
          <li>   <Link href="/contact">
                 <a className="hidden-xs">Contact</a>
               </Link></li>
               {!isAuth() && (
              <React.Fragment>
                <li>
                  <Link href="/signin">
                    <a>Signin</a>
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    <a>Signup</a>
                  </Link>
                </li>
                </React.Fragment>
             
            )}


{isAuth() && isAuth().role === 1 && (
              <li>
                <Link href="/admin">
                  <a>{`${isAuth().name}'s Dashboard`}</a>
                </Link>
              </li>
            )}

            {isAuth() && isAuth().role === 0 && (
              <li>
                <Link href="/viewer">
                  <a>{`${isAuth().name}'s Dashboard`}</a>
                </Link>
              </li>
              
            )}
             {isAuth() && isAuth().role === 2 && (
              <li>
                <Link href="/editor">
                  <a>{`${isAuth().name}'s Dashboard`}</a>
                </Link>
              </li>
              
            )}

            {isAuth() && (
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </a>
              </li>
            )}
  {isAuth() && isAuth().role === 1 && (
    <li>
              <a href="/user/crud/blog" className="btn btn-primary text-light">
                Write a blog
              </a>
            </li>
  )}
<li>

<div  className="check">
      <Search />
      </div>
</li>


          <a class="icon">
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-youtube"></i>

          </a>
            </ul>
        </div>
      </div>
      

      
    </React.Fragment>
  );
};

export default Header;
