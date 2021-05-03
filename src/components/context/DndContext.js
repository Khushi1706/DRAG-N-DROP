import { createContext } from "react";


const MovableContext = createContext({
    source: {},
    setSource: () => {}
});

const DestinationContext = createContext({
    destination: {},
    setDestination: () => {}
});

export { MovableContext, DestinationContext }