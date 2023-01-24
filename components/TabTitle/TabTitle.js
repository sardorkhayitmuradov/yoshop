const TabTitle = ({ titleWrappClassName,onClick, children }) => {
    return (
        <span className={titleWrappClassName} onClick={onClick}>
            <h3 className="text-[16px] font-[400] text-[#F9F9FB]">{children}</h3>
        </span>
    )
};

export default TabTitle;