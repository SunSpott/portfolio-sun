import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
    const aboutMe = "About me".split('');
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={aboutMe}
                            idx={15}
                        />
                    </h1>
                    <p>Greetings! I'm a 26-year-old dietetics graduate who has discovered a deep passion for Front-end Development. While my expertise in logical thinking is well-founded, I am eager to embark on this new career path and expand my skills in the world of web development.</p>
                    <p>Confidence in my logical abilities drives me forward as I venture into the realm of Front-end Development. Though I may not possess extensive developer experience, I approach every challenge with a growth mindset, excited to learn and collaborate with others in the field.</p>
                    <p>My life's journey has now converged with the captivating world of Front-end development. Empowered by my logical mindset, I am determined to create visually appealing and user-friendly digital solutions. As I gain hands-on experience, I eagerly anticipate the transformations I'll make in the digital landscape.</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faSquareJs} color='#5ED4F4' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#EFD81D' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>
                </div>
           </div>
           <Loader type="pacman" />
        </>
    )
}

export default About