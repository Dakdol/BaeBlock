const LongBox = (props) => {
  return (
    <div
      className={`flex items-center justify-center ${props.color} w-[360px] h-[90px] rounded-lg border-[1.5px] border-black basic-shadow`}>
      <div className='font-bold text-headline tracking-tighter'>{props.text}</div>
    </div>
  );
};

export default LongBox;
