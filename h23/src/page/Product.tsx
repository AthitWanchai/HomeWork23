import Navber from "../components/Navber"
import Imge from "../components/Imge"
import Tables from "../components/Tables"
import Container from '@mui/material/Container';
import Divider from "../components/Divider";
import Radio from "../components/Radio";


function Product() {
    return (
        <>
            <Navber />
            <Container maxWidth="xl">
                <div className="grid md:grid-cols-2 grid-cols-1 ">
                    <div >
                        <Imge />
                    </div>
                    <div >
                        <Tables />
                        <Divider />
                    </div>
                    <div className="col-span-2">
                        <Radio />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Product