const TabTitle = ({ titleWrappClassName,onClick, children }) => {
    return (
        <span className={titleWrappClassName} onClick={onClick}>
            <h3 className="text-[16px] leading-[25px] max-[450px]:text-[14px]">{children}</h3>
        </span>
    )
};

export default TabTitle;