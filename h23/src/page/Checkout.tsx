import Checkout_Form from "../components/Checkout_Form"
import Formbilling from "../components/Formbilling"
import Yourcart from "../components/Yourcart"

function Checkout() {
    
    return (
        <div className="bg-slate-100">
            <Checkout_Form />
            <div className="container mx-auto px-12 grid grid-cols-1 gap-12 md:grid-cols-2 ">
                <div>
                <Formbilling />
                </div>
                <div >
                    <Yourcart/>
                </div>
            </div>
        </div>
    )
}

export default Checkout