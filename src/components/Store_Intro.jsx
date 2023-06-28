import { NFTChips } from '../components/Nft_Chips';
import star from '../images/icon_star.png';
import rightArrow from '../images/icon_chevron right_.png';

const StoreIntro = (props) => {
  return (
    <div className='  bg-white w-[320px] h-[140px]  flex-cols justify-center items-center p-[10px]  mt-2 shadow-md rounded-lg border-[2px] border-[#2D2D32]'>
      <div className='flex justify-center font-agothic16 mt-2 ' style={{ fontSize: '20px' }}>
        {props.storeName}
      </div>
      <div className='flex justify-center items-center mt-2'>
        {[...Array(parseInt(props.starCount))].map((_, i) => (
          // <AiFillStar key={i} size={24} color="FFD84D" />
          <img src={star} alt='star' />
        ))}

        <img src={rightArrow} alt='rightArrow' />
      </div>
      <div className=' flex justify-center items-center gap-2 mt-4 '>
        {[...Array(parseInt(props.NFTChips.length))].map((v, i) => (
          <NFTChips title={props.NFTChips[i].name} key={i} size={24} color='FFD84D' />
        ))}
      </div>
    </div>
  );
};

export default StoreIntro;
