const Badge = (props) => {
  return (
    <div
      className={`font-agothic16 w-[70px] h-[70px] ${props.color} text-[#FAFAF2] flex justify-center items-center rounded-full border-[1px] shadow-md`}
      style={{ fontSize: "18px" }}
    >
      {props.text1}
      <br />
      {props.text2}
    </div>
  );
};
export default Badge;
