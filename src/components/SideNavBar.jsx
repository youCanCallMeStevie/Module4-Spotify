import Logo from "../assets/logo.png";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { InputGroup, FormControl, Button, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faBook, faHeart, faPlusCircle, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";

import "./CSS/SideNavBar.css";


export class SideNavBar extends Component {
  render() {
    return (
      <>
        <div className="aside">
          <div>
          <Link to="/home"><Image src ={Logo} alt="logo" className="logo" /></Link>
          </div>

          <div className="menu d-flex column justify-content-start align-items-center">
            <div className="input-group-prepend">
              <InputGroup className="mb-3">
              <FormControl

                id="searchInput"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" id="searchBtn" className="btn btn-outline-success btn-sm"><FontAwesomeIcon icon={faSearch}/></Button>
                </InputGroup.Append>
                </InputGroup>               
              </div>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
              <div className="col">
                <a href="#">
                  {" "}
                  <FontAwesomeIcon className="fas fa-home fa-lg mr-3" icon={faHome}/>Home
                </a>
              </div>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
              <div className="col">
                <a href="#">
                  {" "}
                  <FontAwesomeIcon className="fas fa-book fa-lg mr-3" icon={faBook}/>Your library
                </a>
              </div>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
              <div className="col">
                <a href="#">
                <FontAwesomeIcon className="fas fa-plus-circle fa-lg mr-3"icon={faPlusCircle}/>Create playlist
                </a>
              </div>
            </div>
            <div className="menu d-flex column justify-content-start align-items-center">
              <div className="col">
                <a href="#">
                <FontAwesomeIcon className="fas fa-heart fa-lg mr-3" icon={faHeart}/>Liked Songs
                </a>
              </div>
            </div>
          
          <br/>
          <div className="playlists"></div>

          <div className="stick-to-bottom-index-page">
            <div className="login-button-index">
              <a href="login.html">
                <span>SIGN UP</span>
              </a>
            </div>
            <div className="login-button-index">
            <Link to="/login">
                <span>LOGIN</span>
              </Link>
            </div>
            <div className="install-btn">
              <a href="#">
              <FontAwesomeIcon icon={faArrowCircleDown}/>Install
              </a>
            </div>
          </div>
          </div>
      </>
    );
  }
}

export default withRouter(SideNavBar);
