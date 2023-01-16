const ResourcesCard = ({video , title , description}) => {
  return (
    <div className="flex items-start flex-col justify-center max-w-[600px] w-full">
        <video width="600" height='270' className="mb-[14px] rounded-[10px]" controls>
            <source src={video} type="video/mp4" />
        </video>
        <h4 className="poppins font-bold text-[20px] leading-[140%] text-[#F9F9FB] mb-[6px]">{title}</h4>
        <p className="poppins text-[16px] leading-[25px] text-[#F9F9FB]">{description}</p>
    </div>
  )
}

export default ResourcesCard;