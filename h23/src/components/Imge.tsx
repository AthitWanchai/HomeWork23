import Img from '../img/5ce616ff664c6.jpeg';
import CustomizedProgressBars from '../components/CustomizedProgressBars';

function Imge() {
    return (
        <div className="container p-10 ">
            <div className="relative w-90 overflow-hidden">
                <img
                    src={Img}
                    alt=""
                    className="w-full max-h-lg block"
                />
                <CustomizedProgressBars />
            </div>
        </div>
    );
}

export default Imge;
