import Provider from "../../context/biodataContext";
import BiodataForm from "./BiodataForm";
import ListBiodata from "./ListBiodata";

const Biodata = () => {
  return (
    <Provider>
      <BiodataForm />
      <ListBiodata />
    </Provider>
  );
};

export default Biodata;