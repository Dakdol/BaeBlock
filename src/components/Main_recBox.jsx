const Box = (props) => {
  return (
    <div
      className={`w-[170px] h-[170px] ${props.color} rounded-lg border-2 border-black basic-shadow`}>
      <div className='font-bold text-headline p-2 w-24 leading-8'>{props.text}</div>
    </div>
  );
};

export default Box;
