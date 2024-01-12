export default function BasicTable() {
    return (
        <>
            <section className="flex py-10 w-45">
                <article className="shadow-lg p-4 border-2 rounded-lg h-80" >
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
                    <div className="text-gray-500 my-1 py-1">
                        <button className="font-semibold tracking-wide bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mt-2 focus:outline-none hover:bg-blue-200">Add Cart</button>
                    </div>
                </article>
            </section>
        </>
    );
}