import { useEffect,createContext, useContext, useMemo ,useReducer } from "react"
import {reducer ,initialState} from './reducer'

const AppContext = createContext();


export function AppWrapper({ children }) {
   const [state,dispatch] = useReducer(reducer,initialState);
   useEffect(()=>{  
    // const load = JSON.parse(localStorage.getItem("cart"));
    // console.log(load)
    // if(load)
    // {
    //   dispatch({
    //     type:"init_stored",
    //     value:JSON.parse(localStorage.getItem("cart"))
    //   });
    // }

    try {
      if(JSON.parse(localStorage.getItem("cart")))
    {
      dispatch({
        type:"init_stored",
        value:JSON.parse(localStorage.getItem("cart"))
      });
    }
    }catch(err){
      console.log('Not loaded')
    }

   },[]);
   useEffect(()=>{
    if(state !== initialState){
      localStorage.setItem("cart",JSON.stringify(state))
    }
   },[state]);

   const contextValue = useMemo(() => {
      return {state, dispatch};
   }, [state, dispatch]);


   return (
   <AppContext.Provider value={contextValue}>
      {children}
   </AppContext.Provider>
   );
}
export function useAppContext() {
   return useContext(AppContext);
}