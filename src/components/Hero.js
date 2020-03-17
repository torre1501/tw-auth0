import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Container, Row, Col } from "reactstrap";




const Hero = () => {
  const { loading, user } = useAuth0();

//if youre not logged in, load default hero component.

  if ( !user) {
    return   <div className="text-center hero my-5">
      <h1 className="mb-4">Welcome to Cruise0!</h1>

    <p className="lead">
      Your dream cruise awaits!
    </p>
  </div>;
  }
 
//get the given name from nickname

 const given = user.nickname.substr(0, user.nickname.indexOf('.'));

  

  return (
  

    console.log({user}),
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
  
        <Col md style={{backgroundColor: "white"}}>
          
          <h1>Welcome {given}!</h1>
           <h3>Basic attributes:</h3>


          <p className="lead text-muted">Email: {user.email}</p>
          <p className="lead text-muted">Nickname: {user.nickname}</p>
          <h3>Dymanic attributes:</h3>

         
         <p className="lead text-muted">Location: {user["https://trustvantage.com/country"]}</p>
         <p className="lead text-muted">IP: {user["https://trustvantage.com/ip"]}</p>
         <h3>User metadata attributes:</h3>
         <p className="lead text-muted">Gender: {user["https://trustvantage.com/gender"]}</p>
         <p className="lead text-muted">Favourite Cruise: {user["https://trustvantage.com/favCruise"]}</p>
         

        </Col>
      </Row>
    
    </Container>
  );
};


export default Hero;
