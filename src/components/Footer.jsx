
import fb from "../assets/fb.png"
import tweet from "../assets/tweet.png"
import youtube from "../assets/youtube.png"
import insta from "../assets/insta.png"

const Footer = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
        <nav className='py-1  flex flex-row items-center justify-center flex-wrap'>
            <a className='w-6 mx-5 my-5'><img src={fb} alt='img'/></a>
            <a className='w-6 mx-5 my-5'><img src={insta} alt='img'/></a>
            <a className='w-6 mx-5 my-5'><img src={tweet} alt='img'/></a>
            <a className='w-6 mx-5 my-5'><img src={youtube} alt='img'/></a>
        </nav>

        <div className='py-2 flex sm:flex-row xx:flex-col justify-center'>
            <a className='cursor-pointer py-3 px-3 font-bold text-lg text-gray-600'>Conditions of Use</a>
            <a className='cursor-pointer px-3 font-bold mt-3 text-lg text-gray-600'>Privacy & Policy</a>
            <a className='cursor-pointer font-bold  px-3 py-2 mt-1 text-lg  text-gray-600'>Press Room</a>
        </div>
        <div className='py-3 font-semibold text-md text-gray-400'>@2021 MovieBox by Ucee</div>
    </div>
  )
}

export default Footer