import Navbar from "./Navbar";
import Footer from "./Footer";
import BobRoss from "../Images/BobRoss.jpg";

export default function About() {
    return (
        <><div className="About">About Suzanne</div><div className="column">
            <div className="pictures">
                <img src={BobRoss} alt="Artist Photo" />
            </div>
            <div className="About-Text">
                Suzanne blah blah blah blah blah blah blah blah blah blah
            </div>
        </div></>

    )
}

