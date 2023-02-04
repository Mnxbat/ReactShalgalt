import React from "react";
import Zurag4 from "../../Assets/unsplash.jpg"

const Redtext = () =>{
    return(
        <div className="w-full h-[600px] flex justify-center  items-center items-center overflow-hidden gap-2">
            <div className="w-[35%] h-[400px]">
                <h3 className="text-4xl">Red Text 1</h3>
                <p>Bi eniig yeroosoo shalgaaguigeer text oruulj baina ta lav itgehgui dee 
                    bi buur argaa baraad tusuulluuruu bichij baina  yaah argaa medehgui bn
                    eslint
                </p>
                <img src={Zurag4} alt="" />
            </div>
            <div className="w-[5%] h-[400px]"></div>
            <div className="w-[35%] h-[400px]">
                <h3 className="text-4xl">Red text 2</h3>
                <p>Bi eniig yeroosoo shalgaaguigeer text oruulj baina ta lav itgehgui dee 
                    bi buur argaa baraad tusuulluuruu bichij baina  yaah argaa medehgui bn
                    Plugin "react" was conflicted between "package.json » eslint-config-react-app » C:\Users\Battsend\Documents\React\shalgalt\my-shalgalt-app-2\node_modules\eslint-config-react-app\base.js" and "BaseConfig » C:\Users\Battsend\Documents\React\Shalgalt\my-shalgalt-app-2\node_modules\eslint-config-react-app\base.js".</p>
            </div>
        </div>
    )
}
export default Redtext;