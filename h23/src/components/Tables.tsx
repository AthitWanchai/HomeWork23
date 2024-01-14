import { Link } from 'react-router-dom';
export default function BasicTable() {
    return (
        <>
            <section className="flex pt-10 pb-5 max-w-full">
                <article className="shadow-lg p-3 border-2 rounded-lg " >
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">Product Name</h3>
                    <p className="text-gray-500 mb-2">
                        Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum augue et uliamcorper aliquet.
                    </p>
                    <p className=" my-1 py-1">
                        Price: $99
                    </p>
                    <p className=" my-1 py-1">
                        Quantity:
                    </p>
                    <input className="shadow border  w-full py-2 px-3 text-grey-darker" placeholder="0"></input>
                    <div className="text-gray-500 my-1 py-5">
                        <Link to="/Checkout" className='font-semibold tracking-wide bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mt-2 focus:outline-none hover:bg-blue-200'>Add Cart</Link>
                    </div>
                </article>
            </section>
        </>
    );
}