import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";




const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }
 
//get the given name from nickname

 const given = user.nickname.substr(0, user.nickname.indexOf('.'));

  

  return (
  

    console.log({user}),
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
  
        <Col md style={{backgroundColor: "white"}}>
          
          <h2>Welcome {given}!</h2>
           <h3>Basic attributes:</h3>


          <p className="lead text-muted">Email: {user.email}</p>
          <p className="lead text-muted">Nickname: {user.nickname}</p>
          <h3>Dymanic attributes:</h3>

         
         <p className="lead text-muted">Location: {user["https://trustvantage.com//country"]}</p>
         <p className="lead text-muted">IP: {user["https://trustvantage.com/ip"]}</p>
         <h3>User metadata attributes:</h3>
         <p className="lead text-muted">Gender: {user["https://trustvantage.com/gender"]}</p>
         <p className="lead text-muted">Favourite Cruise: {user["https://trustvantage.com/favCruise"]}</p>
         

        </Col>
      </Row>
    
    </Container>
  );
};

export default Profile;
