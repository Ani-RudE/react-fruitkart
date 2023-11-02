import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext(); //Used to share and manage data across components
//Context allows components to subscribe to context changes and access context values

function AppProvider(props) {
     const [state, setState] = useState({
          cart: [],
          products: []
     })
     return (
          <AppContext.Provider value={[state, setState]}>
               {props.children}
          </AppContext.Provider>
     )
}

export { AppProvider };
export default AppContext;