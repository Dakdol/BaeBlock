import { NFTChips } from '../components/Nft_Chips';
import star from '../images/icon_star.png';
import rightArrow from '../images/icon_chevron right_.png';

const StoreIntro = (props) => {
  return (
    <div className='bg-white w-80 h-[140px] flex flex-cols justify-center items-center rounded-2xl border-2 border-black yellow-shadow'>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            {props.storeName ? (
              <input
                className='w-46 h-8 border-b-[2px] border-black'
                type='text'
                placeholder={props.storeName}
              />
            ) : (
              <input
                className='w-46 h-8 border-b-[2px] border-black px-2 rounded-tl-full rounded-bl-full'
                type='text'
                placeholder='매장명을 입력해주세요!'
              />
            )}
            <button className='bg-deepYellow px-2 rounded-full text-center font-bold text-caption ml-2'>
              확인
            </button>
          </div>
          <div className='flex justify-center items-center mt-2'>
            {[...Array(parseInt(props.starCount))].map((_, i) => (
              // <AiFillStar key={i} size={24} color="FFD84D" />
              <img src={star} alt='star' />
            ))}
            <img src={rightArrow} alt='rightArrow' />
          </div>
        </div>
        <div className=' flex justify-center items-center gap-2 mt-4'>
          {[...Array(parseInt(props.nftTitle.length))].map((v, i) => (
            <NFTChips key={i} title={props.nftTitle[i].name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreIntro;
