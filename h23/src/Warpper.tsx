import { HashRouter} from "react-router-dom"
import App from "./App"

function Warpper() {
    return (
        <HashRouter >
            <App />
        </HashRouter>
    )
}

export default Warpper