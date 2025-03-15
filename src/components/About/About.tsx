import './About.css';
import avatar from '../../../avatar.jpg';

const About = () => {
  const skills = [
    'React Native', 'Expo', 'TypeScript', 'FastAPI', 'Node.js',
    'PostgreSQL', 'Firebase', 'Supabase', 'Git', 'GitHub', 'RESTful APIs'
  ];

  const experiences = [
    {
      title: 'Mobile & Backend Developer - Reach',
      period: 'May 2024 - Present',
      responsibilities: [
        'Developed and maintained backend services using Django and FastAPI, while also building mobile apps using React Native',
        'Optimized API performance and database queries',
        'Built and integrated secure authentication systems for mobile and backend applications',
        'Worked on real-time data synchronization between mobile and backend services'
      ]
    },
    {
      title: 'Freelance Mobile Developer',
      period: '2022 - Present',
      responsibilities: [
        'Built React Native applications for various clients',
        'Developed and deployed mobile apps with Firebase authentication, real-time databases, and cloud functions',
        'Designed and implemented scalable backend solutions for mobile applications'
      ]
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Your Vision, My Code</h2>
          <p>You dream it, I build it. Let’s create something that stands out.</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={avatar} alt="Profile" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate mobile app developer with a strong background in React Native,
              Firebase, and backend development. With experience in building scalable, 
              high-performance applications, I focus on crafting seamless and engaging 
              mobile experiences that solve real-world problems.
            </p>
            
            <h3>My Skills</h3>
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <h3>Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <h4>{exp.title}</h4>
                <p className="experience-date">{exp.period}</p>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;