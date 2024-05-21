'use client'
const Loader = ({ isLoading }) => {
    return (
        <>
            {isLoading &&
                <>
                    <div className="h-screen flex items-center justify-center loader-background">
                        <div className="w-12 h-12 border-4 rounded-full loader"></div>
                    </div>
                </>
            }
        </>
    )
}
export default Loader