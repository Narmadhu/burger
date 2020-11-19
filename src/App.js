import React from "react";
import Layouts from "./components/layouts/Layouts";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"

function App() {
  return (
    <div>
     <Layouts>
       <BurgerBuilder />
     </Layouts>
    </div>
  );
}

export default App;
