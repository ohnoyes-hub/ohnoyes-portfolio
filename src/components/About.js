import IMG from '../assets/Detective.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">When I am not working, I enjoy Scuba, Swimming and travelling. I am an avid gamer with a like to Souls-likes, and Zelda(duh). I enjoy exploring the Cosmere, Dune, Ankh-Morpork</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;