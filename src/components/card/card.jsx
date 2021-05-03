import React from 'react'


const Card = ({ story, status, index }) => {
    return (<figure className="md:flex bg-purple-100 rounded-xl p-8 md:p-0 mt-2 shadow-md" key={index}>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
                <p className="text-lg font-semibold">
                    {story?.title}
                </p>
                <p className="text-lg">
                    {story?.desc}
                </p>
            </blockquote>
            <figcaption className="font-medium">

                <div className="grid grid-flow-col grid-rows-1 grid-cols-5 gap-4">
                    <div>
                        <img src={story?.owner_pic} alt={story?.owner} width="48" height="48" className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />
                    </div>
                    <div className="row-start-1 col-start-2 col-span-4">
                        {story?.owner}
                    </div>
                </div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1 mt-4">
                    {status.toUpperCase()}
                </span>
            </figcaption>
        </div>
    </figure>)

}

export default Card;