const LongBox = (props) => {
  return (
    <div
      className={`font-agothic13 ${props.color} w-[340px] flex justify-center items-center px-[10px] py-[25px] font-bold  mt-4 rounded-lg border-[2px] border-[#2D2D32]`}
      style={{ fontSize: "20px" }}
    >
      {props.text}
    </div>
  );
};

export default LongBox;
