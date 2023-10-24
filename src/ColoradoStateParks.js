import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde"
import * as RockyMountain from "./parks/RockyMountain"
function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <p>{RockyMountain.trees}
      </p>
    </>
  )
}

export default ColoradoStateParks