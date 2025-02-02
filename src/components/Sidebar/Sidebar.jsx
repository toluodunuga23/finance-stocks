import React from 'react'

const Sidebar = () => {
    const MenuList = [
        {
            name: "Finance News",
            path: "/dashboard"
        },
        {
            name: "My Budget",
            path: "/dashboard"
        }
 
    ]

    return (
        <div className='h-screen shadow-md'>
            <h2 className='font-bold text-lg flex flex-col items-center mt-10'>Financely</h2>
            <div className="md: ml-3 ">
                <div className="mt-10 flex flex-col items-center">

                </div>
                <div className='mt-10'>
                    {MenuList.map((menu, index) => (
                        <div key={index} className={`flex gap-5 items-center p-3 hover:bg-green-400 rounded-lg bg-slate-200 cursor pointer mt-6`}>
                            <h2>{menu.name}</h2>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    )
}

export default Sidebar
