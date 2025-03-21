

const CustomHeading = ({ myText = "", myClass = "", }) => {
    return (
        <h2 className={`font-bold text-center md:text-5xl text-[32px] text-black max-sm:leading-[32px] font-integral ${myClass}`}>{myText}</h2>
    )
}

export default CustomHeading
