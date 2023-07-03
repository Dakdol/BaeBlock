const Box = (props) => {
  return (
    <div
      className={`w-[175px] h-[175px] ${props.color} rounded-lg border-[1.5px] border-black basic-shadow`}>
      <div className='font-bold text-headline p-2 w-24 leading-8'>{props.text}</div>
    </div>
  );
};

export default Box;
