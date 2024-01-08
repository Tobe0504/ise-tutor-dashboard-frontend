import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextProps = {
  screenWidthState: number;
  showGetStarted: {
    rightCta: boolean;
    dashboard: boolean;
    showModdal: boolean;
  };
  setShowGetStarted: Dispatch<
    SetStateAction<{
      rightCta: boolean;
      dashboard: boolean;
      showModdal: boolean;
    }>
  >;
  displayRatemodal: boolean;
  setDisplayRateModal: Dispatch<SetStateAction<boolean>>;
  displaySharemodal: boolean;
  setDisplayShareModal: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextProps);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Utils
  const screenWidth = window.innerWidth;

  // States
  const [screenWidthState, setScreenWidthState] = useState<number>(screenWidth);
  const [showGetStarted, setShowGetStarted] = useState<{
    rightCta: boolean;
    dashboard: boolean;
    showModdal: boolean;
  }>({
    rightCta: false,
    dashboard: true,
    showModdal: false,
  });
  const [displayRatemodal, setDisplayRateModal] = useState(false);
  const [displaySharemodal, setDisplayShareModal] = useState(false);

  //   Effects
  useEffect(() => {
    setScreenWidthState(screenWidth);
  }, [screenWidth]);

  return (
    <AppContext.Provider
      value={{
        screenWidthState,
        showGetStarted,
        setShowGetStarted,
        displayRatemodal,
        setDisplayRateModal,
        displaySharemodal,
        setDisplayShareModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
