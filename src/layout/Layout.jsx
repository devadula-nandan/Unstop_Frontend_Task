import Navbar from "./Navbar"
export default function Layout({ children }) {
    return (
        <>
            <div className=" bg-white transition-all lg:bg-[#F6F8FA] flex lg:flex-row flex-col relative">
                <Navbar />
                <div className="pl-0 py-0 pr-0 md:pl-2 md:pr-3 md:py-3 w-full">
                    {children}
                </div>
                {/* <Footer/> */}

            </div>
        </>
    )
}