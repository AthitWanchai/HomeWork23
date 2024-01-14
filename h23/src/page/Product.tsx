import Navber from "../components/Navber"
import Imge from "../components/Imge"
import Tables from "../components/Tables"
import Container from '@mui/material/Container';
import Divider from "../components/Divider";
import Radio from "../components/Radio";
import Reviews from "../components/Reviews";


function Product() {
    return (
        <>
            <Navber />
            <Container maxWidth="xl">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="grid grid-cols-1">
                        <Imge />
                    </div>
                    <div className="grid grid-cols-1">
                        <Tables />
                        <Divider />
                    </div>
                    <div className="grid grid-cols-1 col-span-full">
                        <Radio />
                    </div>
                    <div className="grid grid-cols-1 col-span-full">
                        <Reviews />
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Product