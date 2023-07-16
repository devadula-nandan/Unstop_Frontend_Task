import React, { useState } from 'react'

function NewAssessmentForm() {
    const [skills, setSkills] = useState(["UI/UX and Design", "No of Question", "Web Development", "MySQL", "Express.js"])
    return (
        <>
            <div className='w-full border border-dashed group rounded-box bg-[#F6F8FA] p-[1.875rem] sm:p-2 md:p-[1.875rem] flex gap-2 items-center justify-center flex-col hover:bg-[#ebedf0] cursor-pointer' onClick={() => document.getElementById("my_modal_3").showModal()}>
                <div className='bg-white p-2 lg:p-4 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" fill="none" className='lg:w-[40px] lg:h-[41px] w-[29px] h-[30px] group-hover:rotate-90 transition-all'>
                        <g clipPath="url(#clip0_0_553)">
                            <path d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z" fill="#0073E6" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_553">
                                <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h2 className=' lg:text-lg text-sm font-semibold lg:font-medium text-[#1C4980]'>New Assessment</h2>
                <p className=' text-xs font-medium text-[#1C4980] text-center'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
            </div>
            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className={"p-0 rounded-lg modal-box max-w-[36.937rem] w-full " }>
                    <button className="btn btn-sm btn-circle btn-ghost hover:bg-[#FBEBEA] hover:text-[#D63500] absolute right-5 top-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
                            <path d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z" fill="currentColor" />
                        </svg>
                    </button>
                    <h3 className="px-[1.88rem] py-4 font-semibold text-[#1C4980] text-lg border-b">Create new assessment</h3>
                    <div className='px-[1.88rem] overflow-auto max-h-[60vh] py-4'>
                        <div className="flex gap-5 flex-col form-control w-full">
                            <div>
                                <label className="label pt-0">
                                    <span className="label-text text-[#1C4980] text-base font-medium">Name of assessment</span>
                                </label>
                                <input type="text" placeholder="Type Here" className="!outline-none input text-[#1C4980] font-medium text-sm input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label pt-0">
                                    <span className="label-text text-[#1C4980] text-base font-medium">Purpose of the test is</span>
                                </label>
                                <select defaultValue="" className="!outline-none input text-[#1C4980] font-medium text-sm w-full select select-bordered">
                                    <option disabled value="">Select</option>
                                    <option value="purpose 1">purpose 1</option>
                                    <option value="purpose 2">purpose 2</option>
                                    <option value="purpose 3">purpose 3</option>
                                    <option value="purpose 4">purpose 4</option>
                                    <option value="purpose 5">purpose 5</option>
                                    <option value="none">none</option>
                                </select>

                                {/* <input type="hidden" id='purpose' />
                                <ul className="menu lg:menu-horizontal !bg-white border border-[#DADCE0] w-full rounded-lg p-0 font-medium text-sm text-[#1C4980]">
                                    <li className='w-full'>
                                        <details className='w-full' open>
                                            <summary className='py-3 pl-4 pr-5 w-full !bg-white active:!text-[#1C4980] hover:!text-[#1C4980]'>Parent item</summary>
                                            <ul className='!mt-0 w-full border rounded-lg'>
                                                <li><a className='hover:bg-[#E5F1FC] hover:text-[#1C4980] active:!bg-[#c1d6e9] active:!text-[#1C4980]'>level 2 item 1</a></li>
                                                <li><a className='hover:bg-[#E5F1FC] hover:text-[#1C4980] active:!bg-[#c1d6e9] active:!text-[#1C4980]'>level 2 item 1</a></li>
                                                
                                            </ul>
                                        </details>
                                    </li>
                                </ul> */}

                            </div>
                            <div>
                                <label className="label pt-0">
                                    <span className="label-text text-[#1C4980] text-base font-medium">Description</span>
                                </label>
                                <select defaultValue="" className="!outline-none input text-[#1C4980] font-medium text-sm w-full select select-bordered">
                                    <option disabled value="">Select</option>
                                    <option value="description 1">description 1</option>
                                    <option value="description 2">description 2</option>
                                    <option value="description 3">description 3</option>
                                    <option value="description 4">description 4</option>
                                    <option value="description 5">description 5</option>
                                    <option value="none">none</option>
                                </select>

                            </div>
                            <div>
                                <label className="label pt-0">
                                    <span className="label-text text-[#1C4980] text-base font-medium">Skills</span>
                                </label>
                                <div className="border rounded-lg border-[#DADCE0]">
                                    <div className="flex flex-wrap gap-1 md:gap-2 p-4">
                                        {skills.map((skill, index) => (
                                            <div className='rounded-full flex items-center bg-[#DDEDFF]' key={index}>
                                                <span className='text-[#1C4980] text-xs font-medium pl-2 pr-1 md:pl-3 md:pr-2'>{skill}</span>
                                                <button onClick={(e) => { e.preventDefault(); setSkills(skills.filter((s) => skill !== s)) }} className='btn btn-xs md:btn-sm btn-circle btn-link hover:bg-[#c2d6ee]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <g clipPath="url(#clip0_0_1698)">
                                                            <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_0_1698">
                                                                <rect width="18" height="18" rx="9" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t">
                                        <input type="text" placeholder="Type Here" className="!outline-none input text-[#1C4980] font-medium text-sm w-full" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="label pt-0">
                                    <span className="label-text text-[#1C4980] text-base font-medium">Duration of assessment</span>
                                </label>
                                <input type="text" placeholder="HH:MM:SS" className="!outline-none input text-[#1C4980] font-medium text-sm input-bordered w-full" />
                            </div>

                        </div>
                    </div>
                    <div className='px-[1.88rem] py-4 border-t md:border-0 md:shadow-[0px -4px 50px 0px rgba(0, 0, 0, 0.09)]'>
                        <button className='btn bg-[#0073E6] text-white hover:bg-[#0066cc] transition-all btn-block min-h-[2.6rem] h-4 capitalize'>Save</button>
                    </div>
                </form>
            </dialog>
            <button className='btn btn-circle fixed right-3 bottom-3 border-none bg-[#0073E6] inline-flex lg:hidden' onClick={() => document.getElementById("my_modal_3").showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M23.3333 16.1905H16.1905V23.3333H13.8095V16.1905H6.66666V13.8095H13.8095V6.66666H16.1905V13.8095H23.3333V16.1905Z" fill="white" />
                </svg>
            </button>
        </>
    )
}

export default NewAssessmentForm