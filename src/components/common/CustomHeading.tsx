

const CustomHeading = ({ myText = "", myClass = "", }) => {
    return (
        <h2 className={`font-bold text-center md:text-5xl text-[32px] text-black ${myClass}`}>{myText}</h2>
    )
}

export default CustomHeading
