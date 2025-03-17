import { Outlet } from "react-router-dom"
import Home from "../components/Home/Home"
import Footer from "../components/Footer/Footer"

const Root = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}

export default Root