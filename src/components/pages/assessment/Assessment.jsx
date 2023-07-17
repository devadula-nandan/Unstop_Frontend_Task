import React, { useState } from 'react'
import AssessmentCard from './card/AssessmentCard'
import NewAssessmentForm from './card/NewAssessmentForm'
import OverviewDesktop from './overview/OverviewDesktop'
import OverviewMobile from './overview/OverviewMobile'

function Assessment() {
    const assessments = []
    for (let i = 0; i < 5; i++) {
        assessments.push({ id: i, title: `Assessment ${i}` })
    }
    const [showMobileOverview, setShowMobileOverview] = useState(false)
    const [btnState, setBtnState] = useState({
        search: false,
        filter: false,
        overview: false
    })
    return (
        <div className='bg-base-100 rounded-box'>
            <div className="flex gap-3 px-0 lg:px-5 border-b w-max min-w-full">
                <h1 className='text-xl font-semibold text-[#1C4980] my-auto hidden lg:block'>Assessment</h1>
                <div className=" h-auto w-[1px] bg-[#DADCE0] my-2 hidden lg:block"></div>
                <div className="tabs w-screen overflow-auto flex-nowrap px-1">
                    <a href='#1' className="tab text-[0.875rem] px-2 whitespace-nowrap h-auto tab-bordered font-semibold py-3 lg:py-5 text-[#0073E6] border-b-2 border-[#0073E6]">My Assessments</a>
                    <a href='#2' className="tab text-[0.875rem] px-2 whitespace-nowrap h-auto tab-bordered font-semibold py-3 lg:py-5 text-[#1C4980] border-transparent">Unstop Assessments</a>
                </div>
            </div>
            <div className="lg:px-5 lg:pb-5 lg:pt-4 px-3 pb-3 pt-4">
                {/* expander here */}
                <div className='block lg:hidden'>
                    <OverviewMobile show={showMobileOverview} />
                </div>
                <h3 className=' font-medium text-lg text-[#1C4980] mb-4 hidden lg:block'>Assessments Overview</h3>
                <div className='hidden lg:block'>
                    <OverviewDesktop />
                </div>

                <div className="flex justify-between lg:hidden">
                    <h3 className=' font-medium text-lg text-[#1C4980] mb-4'>My Assessment</h3>
                    <div className='flex gap-1'>
                        <button onClick={() => { setBtnState({ ...btnState, search: !btnState.search }) }} className={'btn btn-sm lg:hover:bg-[#F2F8FE] btn-circle btn-link text-[#1C4980] ' + (btnState.search ? "!text-[#0073E6] bg-[#F2F8FE] hover:bg-[#F2F8FE] border-[#0073E6] hover:border-[#0073E6]" : "")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
                                <g clipPath="url(#clip0_0_1327)">
                                    <path d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1327">
                                        <rect width="22" height="22" fill="currentColor" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button onClick={() => { setBtnState({ ...btnState, filter: !btnState.filter }) }} className={'btn btn-sm lg:hover:bg-[#F2F8FE] btn-circle btn-link text-[#1C4980] ' + (btnState.filter ? "!text-[#0073E6] bg-[#F2F8FE] hover:bg-[#F2F8FE] border-[#0073E6] hover:border-[#0073E6]" : "")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <g clipPath="url(#clip0_0_1329)">
                                    <path d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1329">
                                        <rect width="24" height="24" fill="currentColor" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button onClick={() => { setShowMobileOverview(!showMobileOverview); setBtnState({ ...btnState, overview: !btnState.overview }) }} className={'btn btn-sm lg:hover:bg-[#F2F8FE] btn-circle btn-link text-[#1C4980] ' + (btnState.overview ? "!text-[#0073E6] bg-[#F2F8FE] hover:bg-[#F2F8FE] border-[#0073E6] hover:border-[#0073E6]" : "")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M0 16V5H4V16H0ZM6 16V0H10V16H6ZM12 16V9H16V16H12Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                    <NewAssessmentForm />
                    {assessments.map((item, index) => (
                        <AssessmentCard key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Assessment