import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker, FaJava, FaPython, FaAngular, FaLinux, FaUbuntu } from "react-icons/fa";
import { SiScala, SiHaskell, SiMongodb, SiPostgresql, SiKubernetes, SiFastapi, SiKotlin, SiArchlinux, SiElm, SiApachespark, SiSpring, SiArduino, SiDjango, SiTensorflow, SiLangchain, SiPandas, SiKeras, SiGooglecloud} from "react-icons/si";
import { FaGolang, FaCloudflare, FaFlask, FaC,  } from "react-icons/fa6";

const Skills = () => {
    const skillsArr = [
        {
            "name" : 'JavaScript',
            "icon" : FaJs
        },
        {
            "name" : "HTML",
            "icon" : FaHtml5
        },
        {
            "name" : "CSS",
            "icon" : FaCss3
        },
        {
            "name" : "Git",
            "icon" : FaGithub
        },
        {
            "name" : "Reactjs",
            "icon" : FaReact
        },
        {
            "name" : "Docker",
            "icon" : FaDocker
        },
        {
            "name" : "Java",
            "icon" : FaJava
        },
        {
            "name" : "Python",
            "icon" : FaPython
        },
        {
            "name" : "Go",
            "icon" : FaGolang
        },
        {
            "name" : "Angular",
            "icon" : FaAngular
        },
        {
            "name" : "Linux",
            "icon" : FaLinux
        },
        {
            "name" : "Ubuntu",
            "icon" : FaUbuntu
        },
        {
            "name" : "Scala",
            "icon" : SiScala
        },
        {
            "name" : "Haskell",
            "icon" : SiHaskell
        },
        {
            "name" : "MongoDB",
            "icon" : SiMongodb
        },
        {
            "name" : "PostgreSQL",
            "icon" : SiPostgresql
        },
        {
            "name" : "Kubernetes",
            "icon" : SiKubernetes
        },
        {
            "name" : "FastAPI",
            "icon" : SiFastapi
        },
        {
            "name" : "Kotlin",
            "icon" : SiKotlin
        },
        {
            "name" : "Arch Linux",
            "icon" : SiArchlinux
        },
        {
            "name" : "Cloudflare",
            "icon" : FaCloudflare
        },
        {
            "name" : "Elm",
            "icon" : SiElm
        },
        {
            "name" : "Apache Spark",
            "icon" : SiApachespark
        },
        {
            "name" : "Python Flask",
            "icon" : FaFlask
        },
        {
            "name" : "Spring",
            "icon" : SiSpring
        },
        {
            "name" : "Arduino",
            "icon" : SiArduino
        },
        {
            "name" : "C",
            "icon" : FaC
        },
        {
            "name" : "Django",
            "icon" : SiDjango
        },
        {
            "name" : "TensorFlow",
            "icon" : SiTensorflow
        },
        {
            "name" : "LangChain",
            "icon" : SiLangchain
        },
        {
            "name" : "Pandas",
            "icon" : SiPandas
        },
        {
            "name" : "Keras",
            "icon" : SiKeras
        },
        {
            "name" : "Google Cloud",
            "icon" : SiGooglecloud
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p
                                className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default Skills;
