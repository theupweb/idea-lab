import React from 'react';

export default function card() {
    return (
        <div class="flex flex-wrap -m-2 mt-12 ml-4 ">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div class="border-gray-200 border rounded-lg shadow-md">
                        <div class=" flex justify-end p-2">
                            <button class="inline-flex text-yellow-300 bg-indigo-700 border-0 py-2 px-6 focus:outline-none rounded-lg text-lg">Developer</button>
                        </div>
                        <div class="flex-grow p-2 ml-4">
                            <h2 class="text-gray-900 title-font font-medium">I have an Idea. I need a Designer!</h2>
                            <p class="text-gray-500">Building an Open-Source Learning platform</p>
                        </div>
                        <div class="flex m-2">
                            <button  class="inline-flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded-lg md:text-lg text-base">Talk now!</button>
                            <button  class="ml-4 inline-flex text-black bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-lg md:text-lg text-base">Save for letter</button>
                        </div>
                        <div class=" border-gray-300 border-t-4 ml-4 mr-4"></div>
                        <div class=" inline-flex grid grid-cols-2 md:gap-4 gap-2">
                            <div class="inline-flex grid md:grid-cols-2 grid-cols-1 gap-2 m-2">
                                <p id="tag" class="text-base p-2 bg-indigo-700 rounded-full text-center"> Developer </p>
                                <p id="tag" class="text-base p-2 ml-2 bg-indigo-700 rounded-full text-center"> UI/UX </p>
                                <p id="tag" class="text-base p-2 ml-2 bg-indigo-700 rounded-full text-center"> React </p>
                                <p id="tag" class="text-base p-2 ml-2 bg-indigo-700 rounded-full text-center"> HTML & CSS </p>
                            </div>
                            <div class="flex justify-end mr-4">
                                    <div class="h-full flex items-center">
                                        <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4 " src="./logo512.png"/>
                                        <div class="flex-grow">
                                        <h2 class="md:text-base text-sm text-gray-900 title-font font-medium">Idea-lab</h2>
                                        <p class="md:text-base text-sm text-gray-500">Posted in Jan 6, 2021</p>
                                        </div>
                                    </div>
                            </div>
                        </div>    
                </div>
            </div>
    </div>
    )
}
