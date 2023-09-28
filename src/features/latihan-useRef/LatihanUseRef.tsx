import { ChangeEvent, useRef } from "react";

const LatihanUseref = () => {
  const inputImgRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
        if(imgRef.current){
            imgRef.current.src = URL.createObjectURL(e.target.files[0]);
        }
    }
  };
  return (
    <>
      <div>
        <input type="file" ref={inputImgRef} onChange={handleChangeInput} accept="image/*"/>
      </div>
      <div>
        <img style={{ width: 400 }} ref={imgRef} />
      </div>
    </>
  );
};
export default LatihanUseref;