import { Outlet } from "react-router-dom"
import Home from "../components/Home/Home"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default Root