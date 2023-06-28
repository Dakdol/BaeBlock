const workBadgeBTN = (props) => {
  return (
    <div
      className={`w-20 h-20 ${props.color} text-lightBage flex justify-center items-center rounded-full border-2 basic-shadow`}>
      <div className='text-subtitle font-bold text-center leading-tight'>영업중</div>
      {/* <div className='text-subtitle font-bold text-center w-12 leading-tight'>영업안함</div> */}
    </div>
  );
};
export default workBadgeBTN;
