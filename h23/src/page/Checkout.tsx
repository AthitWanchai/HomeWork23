import Checkout_Form from "../components/Checkout_Form"
import Formbilling from "../components/Formbilling"
import Yourcart from "../components/Yourcart"

function Checkout() {
    return (
        <div className="bg-slate-100">
            <Checkout_Form />
            <div className="container mx-auto grid grid-cols-2 ">
                <div>
                <Formbilling />
                </div>
                <div className="pl-52">
                    <Yourcart/>
                </div>
            </div>
        </div>
    )
}

export default Checkout