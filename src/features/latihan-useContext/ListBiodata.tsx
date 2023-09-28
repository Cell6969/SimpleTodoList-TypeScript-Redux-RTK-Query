import { useContext } from "react";
import { BiodataContext } from "../../context/biodataContext";

const ListBiodata = () => {
  const { biodata } = useContext(BiodataContext);
  return (
    <>
      <div>
        <ul>
          {biodata?.map((item, index) => (
            <li key={index}>
              <h3>
                {item.nama} ({item.email})
              </h3>
              <h4>{item.phone}</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ListBiodata;
