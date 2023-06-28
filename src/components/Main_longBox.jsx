const LongBox = (props) => {
  return (
    <div
      className={`flex items-center justify-center ${props.color} w-[360px] h-[90px] rounded-lg border-2 border-black basic-shadow`}>
      <div className='font-bold text-headline tracking-tighter'>{props.text}</div>
    </div>
  );
};

export default LongBox;
