import react from "react";
import { Link } from "react-router-dom";
import Zurag1 from "../Assets/channels4_profile.jpg"

const Mainpage = () => {
    return (
        <div className="w-full h-[800px]">
            <div className="w-full h-[600px] flex justify-between">
                <div className="w-[30%] h-[300px] bg-[red] text-4xl flex justify-center items-center">
                    <Link to={"/box/text1"}>Read More</Link>
                </div>
                <div className="w-[30%] h-[200px] bg-black text-4xl flex justify-center items-center">
                     <Link to={"/"}><img src={Zurag1} alt="/" /></Link>
                </div>
            </div>
            <div className="w-full h-[200px] flex justify-between" >
                <div className="w-[30%] h-[200px] bg-[green] text-4xl flex justify-center items-center ">
                    <Link to={"/box/text2"}> Read More</Link>
                </div>
                <div className="w-[30%] h-[200px] bg-[blue] text-4xl text-white flex justify-center items-center">
                    <Link to={"/box/text3"}> Read More </Link>
                </div>
            </div>
        </div>
    )
}
export default Mainpage;