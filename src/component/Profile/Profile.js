import React from 'react'
import PropTypes from "prop-types";


const Profile = (props) => {
    
    return (
        <div>

            {props.hundleName(`${props.fullName}`)}
            <div style={{color:"red",width: "100%"}}>
                {props.fullName}
            </div>
            <br/>
            <div className="Bio">
                {props.bio}
            </div>
            <br/>
            <div className="Profession">
                {props.profession}
            </div>
            <br/>
            {props.children}
            <br/>
        </div>
    )
}

Profile.defaultProps ={
    fullName:"TAJOURI Talel",
}

Profile.propTypes ={
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element.isRequired
};


export default Profile
