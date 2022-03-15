import Image from "next/image";
import avatar from '../assets/avatar.png';

const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20 `
}

export const Navbar = () => {
  return <div  className={style.wrapper}>
    <div className={style.leftMenu}>
      <div className={style.logo}>Uber</div>
      <div className={style.menuItem}>Ride</div>
      <div className={style.menuItem}>Drive</div>
      <div className={style.menuItem}>More</div>
    </div>
    <div className={style.rightMenu}>
      <div className={style.menuItem}>Help</div>
      <div className={style.menuItem}>Liz</div>
      <div className={style.userImageContainer}>
        <Image src={avatar} width={40} height={40}/>
      </div>
    </div>
  </div>
};
