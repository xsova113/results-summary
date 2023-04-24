
// const bgColor = ["bg-[#fff6f6]", "bg-[#fffbf2]", "bg-[#f3fafa]", "bg-[#f3f3fe]"]

// const textColor =["text-[#f27575]",  "text-[#dbb650]", "text-[#55a593]", "text-[#314196]"]

const Attributes = ({
  category,
  score,
  icon,
  bgColor,
  textColor
}) => {
  return (
    <div
      className={`
        ${bgColor}
        my-4
        p-4
        rounded-lg
        w-[250px]`}
    >
      <div
        className='
        flex
        items-middle
        justify-between
       '
      >
        <div className='flex'>
          <img src={icon} alt='icon' />
          <h2 className=
            {`
          ${textColor}
          ml-4
          tex-md`}
          >
            {category}
          </h2>
        </div>

        <div className='flex'>
          <span
            className='
            font-semibold'
          >
            {score} &nbsp;
          </span>
          <p className='text-slate-500'>/ 100</p>
        </div>
      </div>
    </div>
  )
}

export default Attributes