import React from 'react';
import PropTypes from "prop-types";

const mystyle = {
    color: "#C5B481",
    textAlign: "center",
    fontFamily: "Courrier new"
}

const mystyle2 = {
    textAlign: "justify",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
    fontFamily: "Courrier new",
}

const mystyle3 = {
    fontFamily: "Courrier new",
    fontSize: "bolder"
}



function Profile(props) {

    function handelName () {
        return (
        alert ('I am ' + props.fullName + " and my first EP will be out soon")
        );
    }
    
    

    return (
      <div className="Profile">

        <h1 style={mystyle}>{props.fullName}</h1>
        <h2 style={mystyle3}>{props.profession}</h2>
        <button onClick={handelName} className="mb-3 btn-outline-dark rounded">Click Here</button> <br/>
        <img src="/sabsig.jpg" alt="it's empty here" className="mb-3"/> {props.children}
        <h2 style={mystyle2}>{props.bio}</h2>
        

        
      </div>
    );
  }

  Profile.defaultProps = {
    fullName: "Kabrera",
    bio: "This my bio",
    profession: "Music Artist"
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
   };

export default Profile;