const ResourcesCard = ({video , title , description , thumbnail}) => {
  return (
    <div className="flex items-start flex-col justify-center max-w-[550px] w-full">
        <video loop poster={thumbnail} width="600" height='270' className="mb-[14px] rounded-[10px]" controls>
            <source src={video} type="video/mp4" />
        </video>
        <h4 className="font-bold text-[20px] leading-[140%] mb-[6px]">{title}</h4>
        <p className="text-[16px] leading-[25px]">{description}</p>
    </div>
  )
}

export default ResourcesCard;