import IMG from '../assets/Fish.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">
                I am a driven computer science graduate with a strong background in data science, artificial intelligence, and software engineering. I have hands-on experience with Java, Python, Scala, and Haskell, and a particular passion for functional programming and green IT. My academic and project work spans developing fault detection algorithms, designing web applications, and building cloud-based solutions. I thrive in collaborative environments and enjoy tackling challenging technical problems, with interests ranging from statistical data analysis and theoretical computer science to sustainable software practices.<br /><br />
                Outside of work, I enjoy scuba diving, swimming, and traveling. I’m also an avid gamer—especially drawn to Souls-likes and, of course, Zelda. When I have time to read, I love getting lost in the worlds of the Cosmere, Dune, and Ankh-Morpork.
                </p>
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