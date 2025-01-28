import { useContext } from "react";

import Row from "react-bootstrap/Row";
import PokemonGrid from "./PokemonGrid.jsx";

import { PokemonContext } from "../PokemonContext.js";

function Party() {
  const { inParty } = useContext(PokemonContext);

  return (
    <>
      <h2>My Party ({inParty.length})</h2>
      { inParty.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="gy-4">
        <PokemonGrid pokemon={inParty} location="party" />
        </Row>
      ) : (
        <p>Your party is empty!</p>
      )}
    </>
  );
}

export default Party;