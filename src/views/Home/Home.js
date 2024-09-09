import React, { useEffect } from 'react';
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import job from './img/job.webp';
import { toast } from 'react-hot-toast';

const highDemandJobs = [
  { title: 'Software Engineer', description: 'Software Engineers design, develop, and maintain software applications and systems. They work on coding, testing, and debugging to ensure software is functional, reliable, and user-friendly.' },
  { title: 'Data Scientist', description: 'Data Scientists analyze complex data sets to help organizations make data-driven decisions. They use statistical methods, machine learning, and data visualization to uncover insights and trends from data.' },
  { title: 'Product Manager', description: 'Product Managers oversee the development and lifecycle of products. They work cross-functionally with engineering, marketing, and sales teams to define product features, develop roadmaps, and ensure successful product launches.' },
  { title: 'UX Designer', description: 'UX Designers focus on creating intuitive and engaging user experiences for digital products. They conduct user research, create wireframes and prototypes, and collaborate with developers to ensure the product meets user needs and expectations.' },
  { title: 'Digital Marketer', description: 'Digital Marketers develop and implement online marketing strategies to drive traffic and sales. They use various digital channels, including social media, email, and search engine marketing, to reach and engage target audiences.' },
];

const FAQ = [
  { head: 'How do I create an account?', description: 'To create an account, click the "Sign Up" button on the top right of the homepage. Enter your email, create a password, and complete your profile with relevant information.' },
  { head: 'How do I search for jobs?', description: 'Use the search bar on the homepage to enter keywords and select your desired location. You can filter results by job type, salary, and more.' },
  { head: 'How do I apply for a job?', description: 'Once you find a job you’re interested in, click the "Apply" button on the job listing. You will need to upload your resume and cover letter if required.' },
  { head: 'How can employers post a job?', description: 'Employers can post jobs by clicking on the "Post a Job" button. Fill out the job details, requirements, and company information, and then publish the listing.' },
  { head: 'What should I do if I forget my password?', description: 'Click the "Forgot Password" link on the login page. Follow the instructions to reset your password via email.' },
  { head: 'How can I contact support?', description: 'For any issues or inquiries, you can contact our support team by emailing support@example.com or using the "Contact Us" form on our website.' }
];

function Home() {
  useEffect(() => {
    toast.loading('Loading content...');
    setTimeout(() => {
      toast.dismiss();
      toast.success('Content loaded successfully!');
    }, 1000); // Increased timeout for better user experience
  }, []);

  return (
    <div className='main'>
      <Navbar />
      <div className='content-container'>
        <div className='content'>
          <h1>Empower Your Future -</h1>
          <h4>Explore Jobs, Apply, and Advance</h4>
          <div className='buttons'>
            <button type='button'>Login</button>
            <button type='button'>Sign up</button>
          </div>
        </div>

        <div className='content-img'>
          <img src={job} alt='Content-Img' />
        </div>
      </div>

      <div className='high-demand-jobs'>
        <h3>High-Demand Jobs</h3>
        <div className='job-list'>
          {highDemandJobs.map((job, index) => (
            <div key={index} className='job-item'>
              <h4>{job.title}</h4>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='faq-section'>
        <h3>Frequently Asked Questions</h3>
        <div className='faq-list'>
          {FAQ.map((item, index) => (
            <div key={index} className='faq-item'>
              <h4>{item.head}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
