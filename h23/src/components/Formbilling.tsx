
function Formbilling() {
    return (
        <>
            <div className='container max-w-lg '>
                <form action="" className="grid grid-cols-2 gap-x-10 content-start">
                    <div>
                        <label htmlFor="fname" >Frist Name</label>
                        <div className="relative mt-2 rounded-md ">
                            <input type="text" name="fname" id="fname"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="fname" >Frist Name</label>
                        <div className=" mt-2 rounded-md ">
                            <input type="text" name="fname" id="fname"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="mt-2 col-span-full">
                        <label htmlFor="usename">Usename</label>
                        <div className="relative mt-2 rounded-md ">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">@</span>
                            </div>
                            <input type="text" name="username" id="usename" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 
                        ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6" placeholder="Usename" />
                        </div>
                    </div>
                    <div className="mt-2 col-span-full">
                        <label htmlFor="usename">Email</label>
                        <label htmlFor="optional">(optional)</label>
                        <div className="relative mt-2 rounded-md ">
                            <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 
                        ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6" placeholder="you@example.com" />
                        </div>
                    </div>
                    <div className="mt-2 col-span-full">
                        <label htmlFor="address">Address</label>
                        <div className="relative mt-2 rounded-md ">
                            <input type="address" name="address" id="address" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 
                        ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div className="mt-2 col-span-full">
                        <label htmlFor="address">Address 2</label>
                        <label htmlFor="optional">(optional)</label>
                        <div className="relative mt-2 rounded-md ">
                            <input type="address" name="address" id="address" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 
                        ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                        sm:text-sm sm:leading-6" placeholder="Apartment or suite" />
                        </div>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-52">
                        <div>
                            <label htmlFor="country">Country</label>
                            <select id="country" className="mt-3 border-0  text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-48 p-2.5 dark:border-gray-600
                        ring-2 ring-inset ring-gray-300">
                                <option selected>Choose...</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="state">State</label>
                            <select id="state" className="mt-3 border-0  text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-48 p-2.5 dark:border-gray-600
                        ring-2 ring-inset ring-gray-300">
                                <option selected>Choose...</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="zip">Zip</label>
                            <div className=" mt-2 rounded-md ">
                                <input type="text" name="zip" id="zip"
                                    className="mt-3 border-0  text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-24 p-2.5 dark:border-gray-600
                                    ring-2 ring-inset ring-gray-300" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formbilling