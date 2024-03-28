/* rafce para crear estructura base */
import Logo from "../assets/images/logo.svg";


export const Header = () => {
  return (
    <header className="flex justify-between py-4">
      <img src={Logo} alt="Logo" 
      className="h-6"/>
      <button className="font-Title
       btn text-[8px] bg-transparent shadow-simple-shadow
       hover:bg-white default-hover
       lg:py-2 lg:px-10 lg:text-[11px]">Try it Free</button>
    </header>
  )
}


