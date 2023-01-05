import { useState } from "react";
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

      <Navbar color="light" light expand="md" navbar className="fixed-top stick">
        <Link href="/">
          <NavLink className="font-weight-bold ">Acode</NavLink>
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
{/* <Search /> */}
<div  className="check">
      <Search />
      </div>
</NavItem>

          </Nav>
        </Collapse>
      </Navbar>
      

      
    </React.Fragment>
  );
};

export default Header;
