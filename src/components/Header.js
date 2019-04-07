import React from "react";

const navStyle = {
    marginRight: '60px',
    color: 'white'
  };

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <p className="navbar-brand" style={navStyle}><img src="https://www.birdlife.org/sites/default/files/styles/1600/public/news/puffin-1546796_1920_1.jpg?itok=4DU42phi" width="25" height="25" className="d-inline-block align-top" alt=""></img>Bird Clicker!</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <p className="nav-item nav-link" style={navStyle}>Click on an image to earn points, but don't click on any more than once!</p>
                {/* <p className="nav-item nav-link" style={navStyle}>Your Score: {props.currentScore} | Top Score: 0</p> */}
            </div>
        </div>
    </nav>
  );
}

export default Header;
