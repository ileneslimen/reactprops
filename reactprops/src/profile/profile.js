import React from 'react';
import PropTypes from 'prop-types';

function HandleName (FullName) {
     
    return (
     alert (FullName)
    
    )};
   
function Profile (props) {
  return( 
   <div className='main' style={{ display:'flex', justifyContent:'spacAround', padding: '141px'}}>
       <div style={{display: 'block',marginTop: '100px',fontSize: '21px',fontFamily: 'sans-serif',letterSpacing: '3px',lineHeight: '18px'
}}>
     <div>  {props.FullName}</div>
   <br/>
   <br/>
         <div> {props.bio}</div>
        <br/>
        <br/>
         <div> {props.profession}</div>
         </div>
         <div> {props.children}</div>
         
         <div>{HandleName(props.FullName)}</div>
   </div>
    );
};

Profile.defaultProps = {
    FullName:'Albert Einstein',
    bio:'If you cant explain it simply you dont understand it well enough',
    profession:'Physicist',
    children:  <img style={{width:'250px',
    borderRadius:'20px'}}  src="pic.jpg" alt="img"/> 
   };
Profile.propTypes = {
    FullName: PropTypes.string,
    bio: PropTypes.string,
   profession: PropTypes.string,
   HandleName: PropTypes.func,
   };
 
export default Profile;