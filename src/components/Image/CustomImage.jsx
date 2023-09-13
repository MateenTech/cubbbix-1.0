
export const CustomImage = ({ src, alt, classes }) => {
  return (
    <div className={`${classes} z-0`}>
      <img src={src} alt={alt} className='w-full z-0'/>
    </div>
  )
};