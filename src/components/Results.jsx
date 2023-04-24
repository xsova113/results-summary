
const Results = () => {
    return (
        <div
            className='
            flex
            flex-col
            bg-gradient-to-tr
            from-blue-600
            to-violet-800
            sm:w-[350px]
            sm:h-[480px]
            text-center
            text-white
            rounded-2xl
            py-8
            sm:shadow-[0_30px_45px_-15px]
            sm:shadow-blue-400
            z-10
            gap-5'
        >
            <h1 className='
                font-semibold
                text-2xl
                text-slate-200
                mb-3
            '>
                Your Result
            </h1>
            <div
                className='
                rounded-full
                bg-gradient-to-b
                from-violet-900
                to-blue-700
                w-40
                h-40
                mx-auto
                flex
                justify-center
                items-center
                text-6xl
                font-bold
            '>
                <div className='flex flex-col gap-2'>
                    76
                    <p
                        className='
                        text-sm 
                        font-normal
                        text-slate-400   
                    '>
                        of 100
                    </p>
                </div>
            </div>
            <h2
                className='
                font-semibold
                text-2xl'
            >
                Greate
            </h2>
            <p
                className='
                text-slate-300
                mx-12
                text-center
                text-lg'
            >
                You scored higher than 65% of the people
                who have taken these tests.
            </p>
        </div>
    )
}

export default Results;