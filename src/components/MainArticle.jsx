import MainImage from "../assets/images/illustration-mockups.svg"

export const MainArticle = () => {
  return (
    <article className="bg-hero-bg-mobile lg:bg-hero-bg-desktop
    bg-cover bg-no-repeat bg-cente mt-12 lg:flex lg:justify-around">
      <div className="grid place-items-center place-content-center gap-5 lg:gap-4">
        <h1 className="font-Title font-bold text-[22px] lg:text-[40px]
        lg:w-[20ch] text-center">
          Build The Community Your Fans Will Love
        </h1>

        <p className="text-center lg:w-[50ch]">
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
        Create connections with your users as you engage in genuine discussion. 
        </p>

        <button className="big-btn bg-Pink w-max text-[18px]
        text-Very-Pale-Cyan cursor-pointer
        hover:bg-opacity-[80%] default-hover">
            Get Started For Free
        </button>
      </div>

      <div className="my-10">
        <img src={MainImage} alt="illustration-mockups" />
      </div>
    </article>
  )
}


