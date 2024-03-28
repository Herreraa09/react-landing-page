
import Location from "../assets/images/icon-location.svg"
import Phone from "../assets/images/icon-phone.svg"
import Email from "../assets/images/icon-email.svg"
import Facebook from "../assets/images/facebook.svg"
import Twitter from "../assets/images/twitter.svg"
import Instagram from "../assets/images/instagram.svg"
import Logowhite from "../assets/images/icon-white.png"




export const Footer = () => {
  return (
    <section>
        {/* square */}
    <div className="bg-white py-10 rounded-2xl flex mx-4
    flex-col justify-center items-center gap-8 shadow-shadow-special
    translate-y-[50%] lg:mx-[300px]">
        <h1 className="font-Title font-bold text-[18px]">
            Ready To Build Your Community?
        </h1>

        <button className="big-btn bg-Pink text-Very-Pale-Cyan
        simple-shadow cursor-pointer hover:bg-opacity-[80%]
        default-hover"> 
            Get Started For Free
        </button>
    </div>

    <footer className="bg-Very-Dark-Cyan w-screen 
    pt-[150px] text-Very-Pale-Cyan flex flex-col gap-8
    px-4 pb-16 lg:flex-row lg:justify-around lg:items-center">
        <div className="grid gap-8">
            <img src={Logowhite} alt="Logo" 
            className="mb-2"/>
            <div className="flex gap-4">
                
                <img src={Location} alt="Location icon"
                className="flex-none w-[20px] h-[28px]"/>

                <p className="max-w-[26ch]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua
                </p>
            </div>

            <div className="flex gap-4">
            <img src={Phone} alt="Phone Icon" 
            className="flex-none w-[20px]"/>
                <p>
                    +1-543-123-4567
                </p>
            </div>

            <div className="flex gap-4">
                <img src={Email} alt="Email Icon" 
                className="flex-none h-[22px] w-[22px]"/>
                <p>
                    example@huddle.com
                </p>
            </div>
        </div>

        <div>
            <p>
                About Us
            </p>

            <p>
                What We Do
            </p>

            <p>
                FAQ
            </p>
        </div>

        <div>
            <p>
                Career
            </p>

            <p>
                Blog
            </p>

            <p>
                Contact Us
            </p>
        </div>

        <div className="flex justify-center items-center gap-5">
            <img src={Facebook} alt="" 
            className="w-[25px] bg-Very-Pale-Cyan rounded-full
            cursor-pointer"/>
            <img src={Twitter} alt="" 
            className="w-[25px] bg-Very-Pale-Cyan rounded-full
            cursor-pointer"/>
            <img src={Instagram} alt="" 
            className="w-[25px] bg-Very-Pale-Cyan rounded-full
            cursor-pointer"/>
        </div>


    </footer>
    </section>
  )
}


