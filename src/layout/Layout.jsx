import Navbar from "./Navbar"
// This is the Layout Wrapper component containing the Navbar on top
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