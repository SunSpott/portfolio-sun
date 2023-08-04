import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetter from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Logo from '../Home/Logo'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_tobcsef',
                'template_bgsdhs5',
                refForm.current,
                'KZBh9n2K-Rnz7LYSx'
            )
            .then (
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter 
                        letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in any opportunities in Front-end development.
                        If you have any question or a request, don't hesitate to contact me
                        using the below form or via my Email address: <span>Kritanatsun@gmail.com</span>
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Logo />
            <Loader type='pacman' />
        </>
    )
}

export default Contact