import {FaSteam, FaDiscord, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me?</h1>
                <p className="footer-contact-access">Email: thomas@ohnoyes.com</p>
                <p className="footer-contact-access">Mobile: (+31) 639470359 </p>
            </div>
            <div>
                <h1>Socials</h1>
                <div className="social-icons">
                    <a href="https://www.educative.io/"><i><FaSteam /></i></a>
                    <a href="https://www.educative.io/"><i><FaDiscord /></i></a>
                    <a href="https://www.educative.io/"><i><FaWhatsapp /></i></a>
                    {/* <a href="https://www.educative.io/"><i><FaBluesky /></i></a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
