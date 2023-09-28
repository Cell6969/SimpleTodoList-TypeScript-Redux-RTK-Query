import { FC, ReactNode, createContext, useState } from "react";
import { Biodata } from "../model/Biodata";

interface biodataContext {
  biodata: Biodata[];
  setBiodata: (biodata: Biodata[]) => void;
}
const defaultContext = {
  biodata: [],
  setBiodata: () => {},
};
export const BiodataContext = createContext<biodataContext>(defaultContext);

interface Props {
  children: ReactNode;
}
const Provider: FC<Props> = ({ children }) => {
  const [biodata, setBiodata] = useState<Biodata[]>([]);
  return (
    <BiodataContext.Provider
      value={{
        biodata: biodata,
        setBiodata: setBiodata,
      }}
    >
      {children}
    </BiodataContext.Provider>
  );
};

export default Provider;