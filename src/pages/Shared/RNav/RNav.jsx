
import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login</h2>
                <button className="btn btn-outline w-full">

                <FaGoogle />
                Login With Google
                </button>
                <button className="btn btn-outline w-full">

                < FaGithub/>
                Login With GitHub
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex justify-center items-center rounded-t-lg border text-lg" href="">
                    <FaFacebook className="mr-2"></FaFacebook>
                  <span>  Facebook</span>
                </a>
                <a className="p-4 flex justify-center items-center border-x text-lg" href="">
                <FaTwitter className="mr-2"></FaTwitter>
                  <span>  Facebook</span>
                </a>
                <a className="p-4 flex justify-center items-center rounded-b-lg border text-lg" href="">
                <FaInstagram className="mr-2"></FaInstagram>
                  <span>  Facebook</span>
                </a>
                
            </div>
            {/* Q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               
            </div>
        </div>
    );
};

export default RNav;