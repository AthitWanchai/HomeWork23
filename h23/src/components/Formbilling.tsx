
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function Formbilling() {
    return (
        <>
            <div className='container max-w-lg '>
                <form action="" className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 content-start">
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
                        <label htmlFor="fname" >Last Name</label>
                        <div className=" mt-2 rounded-md ">
                            <input type="text" name="lname" id="lname"
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

                    <div className="mt-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 col-span-full">
                        <div className="mb-4">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                            <select
                                id="country"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                            >
                                <option selected disabled hidden>Choose...</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                            <select
                                id="state"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                            >
                                <option selected disabled hidden>Choose...</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Zip</label>
                            <input
                                type="text"
                                name="zip"
                                id="zip"
                                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                                
                            />
                        </div>
                    </div>
                </form>
                <hr className='my-4' />
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Shipping address is the same as my billing address" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Save this information for next time" />
                </FormGroup>
                <hr className='my-4' />
                <FormControl >
                    <FormLabel id="demo-radio-buttons-group-label">Payment</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="payment"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="credit card" control={<Radio />} label="Credit card" />
                        <FormControlLabel value="debit card" control={<Radio />} label="Debit card" />
                        <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                    </RadioGroup>
                </FormControl>
                <hr className='my-4' />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10' >
                    <div >
                        <label htmlFor="fname" >Name on card</label>
                        <div className="relative mt-2 rounded-md ">
                            <input type="text" name="fname" id="fname"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="fname" >Credit card number</label>
                        <div className=" mt-2 rounded-md ">
                            <input type="text" name="lname" id="lname"
                                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 
                                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                                sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formbilling