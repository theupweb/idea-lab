import React from 'react';

export default function Card({profession, content, tags, imgURL, creator, at}) {

    return (
        <div className="p-7 pt-5 flex flex-col rounded-lg my-10 shadow-2xl sm:w-3/4 mx-5 sm:mx-auto lg:w-1/2" style={{backgroundColor: "#F7F7F7"}}>
            <div className="flex flex-col-reverse justify-between sm:flex-row">
                <div className="mt-2 text-gray-500 tracking-wide leading-8 sm:text-base md:text-xl lg:text-2xl">
                    {content}
                </div>
                <div className="ml-auto sm:ml-3 p-2 px-3 bg-black text-yellow-300 rounded font-bold uppercase lg:p-3 lg:px-5" style={{height: "fit-content", width: "fit-content"}}>
                    {profession}
                </div>
            </div>
            <div className="flex flex-row my-5">
                <button className="p-3 px-5 text-black bg-yellow-300 rounded font-bold text-xs sm:text-base">Talk Now!</button>
                <button className="p-3 px-5 ml-3.5 text-yellow-300 bg-blue-500 rounded font-bold text-xs sm:text-base">Save for Later</button>
            </div>
            <div className="bg-gray-200 h-1 rounded my-2 mb-3"/>
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex flex-wrap pr-3 sm:pr-5 mb-3 sm:mb-0">
                    {
                        tags.map(tag => (
                            <div className="p-1 px-2 mr-1 bg-black text-yellow-200 rounded-lg text-xs text-center md:px-3 md:mr-3" style={{height: "fit-content", width: "fit-content"}}>
                                {tag}
                            </div>
                        ))
                    }
                </div>
                <div className="flex">
                    <img src={imgURL} alt="Logo" className="w-12 sm:w-14 object-contain rounded-xl mr-3"/>
                    <div className="flex flex-col justify-center">
                        <div className="font-bold">{creator}</div>
                        <div className="text-xs text-gray-500">Posted on {at}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
