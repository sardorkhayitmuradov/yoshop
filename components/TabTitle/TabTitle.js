const TabTitle = ({ titleWrappClassName, children }) => {
    return (
        <span className={titleWrappClassName}>
            <h3 className="text-[16px] font-[400] text-[#F9F9FB]">{children}</h3>
        </span>
    )
};

export default TabTitle;