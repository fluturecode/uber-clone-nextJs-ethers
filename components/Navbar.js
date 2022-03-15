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
  </div>;
};
