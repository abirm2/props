import React from 'react'
import PropTypes from 'prop-types';
 const Profile=( props)=> {
    return (
        <div>
            {this.props.handleName(this.props.FullName)}
           <h1>{this.props.FullName}</h1>
           <h2> {this.props.Bio} </h2>
           <h3>{this.props.Profession}</h3>
        </div>
    )
}
export default Profile
// default props 

Profile.defaultProps= {
    FullName:'not found' ,
    Bio:'not found ',
    Profession:'not found '}
    //proptypes
Profile.propTypes = {
        FullName: PropTypes.string,
        Bio: PropTypes.string,
        Profession: PropTypes.string,
}
