import { Row } from "react-bootstrap";
import PokemonGrid from "./PokemonGrid";

function Party(props) {
    return (
      <>
        <h2>My Party ({props.partyPokemon.length})</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="gy-4">
          <PokemonGrid 
          pokemon={props.partyPokemon} 
          removeFromParty={props.removeFromParty} />
        </Row>
      </>
    )
}

export default Party;