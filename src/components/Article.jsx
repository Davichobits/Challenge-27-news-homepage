export const Article = ({img, number, title, text}) => {
  return (
    <article className='h-[162px] flex-none flex md:pr-[54px] md:w-[343px] md:flex-grow'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt="Retro PC" />
      </div>
      <div className='pl-6'>
        <p className='text-GrayishBlue mb-[18px] text-3xl font-bold'>{number}</p>
        <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer sm:text-[14px]'>{title}</h2>
        <p className='text-GrayishBlue text-[14px] sm:text-[13px]'>{text}</p>
      </div>
    </article>
  )
}