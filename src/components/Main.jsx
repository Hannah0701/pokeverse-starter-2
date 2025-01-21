import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import CustomAlert from "./CustomAlert.jsx";
import Party from "./Party.jsx";
import Pokedex from "./Pokedex.jsx";

function Main(props) {
  return (
    <Container className="my-4">
      {props.pokemon.length > 0 ? (
        <>
          <Party partyPokemon={props.inParty}/>
          <Pokedex pokemon={props.notInParty} 
                   partySize={props.inParty.length} 
                   addToParty={props.addToParty} 
                   removeFromParty={props.removeFromParty}
          />
        </>
      ) : (
        <Col md={6} className="mx-auto">
          <CustomAlert variant="info">Loading...</CustomAlert>
        </Col>
      )}
    </Container>
  );
}

export default Main;
