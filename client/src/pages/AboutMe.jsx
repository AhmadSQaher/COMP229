import resume from '../assets/Resume.pdf';

// About me page content
const AboutMe = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>About Me</h1>
            <img src="/profilepic.PNG" alt="Profile Picture" style={{ maxWidth: '300px', borderRadius: '50%' }} />
            <p>I, Ahmad S. Qaher,am a Software Engineering Technology Student at Centennial College.</p>
            <p>Bellow, you can find my resume for a more in depth look at my skills, experiences, and education.</p>
            <a href={resume} download>Download Resume</a>
        </div>
    );
};

export default AboutMe;