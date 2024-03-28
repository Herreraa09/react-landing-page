

export const Article = ({img, title, text}) => {
  return (
    <article className="bg-white px-10 py-20 rounded-lg
    shadow-xl grid gap-5 mb-8 lg:flex lg:justify-center 
    lg:items-center lg:mx-[150px] lg:flex-row-reverse
     lg:even:flex-row">
      
      <img src={img} alt="Article Image" 
      className="lg:w-1/4"/>  
      <div className="lg:mx-[74px]">
      <h1 className="font-Title
      font-bold text-[21px]  lg:text-[25px]
      mb-4 max-sm:text-center">{title}
      </h1>
      <p className="text-Grayish-Blue  lg:text-[18px]
      max-w-[49ch] max-sm:text-center">
        {text}
      </p>
      </div>


    </article>
  )
}

