import { Navigation } from "con/types";
import { createContext } from "react";


interface ConfContextInterface {
  nav?: Navigation;
  activeLink?: string;
  edition?: string;
  isEventBriteLoaded?: boolean;
}

const ConfContext = createContext<ConfContextInterface>({});

export default ConfContext;
