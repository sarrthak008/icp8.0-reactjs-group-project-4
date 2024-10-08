import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./RecuriterProfileCard.css";
import UserProfileimg from "./../UserProfile/userprofileimg.png";
import PhoneImg from "./RecuriterProfileCardImgs/telephone.png";
import MailImg from "./RecuriterProfileCardImgs/mail (1).png";
import LnkdinImg from "./RecuriterProfileCardImgs/linkedin.png"


function RecuriterProfileCard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const savedProfileDetails = JSON.parse(localStorage.getItem("items")) || [];
        setItems(savedProfileDetails);
    }, []);

    return (
        <div>
            <Sidebar />
            <div className='view-post-heading recr-profile-heading'>
                <h2>Recruiter Profile</h2>
            </div>

            {items.length === 0 ? (
                <div className='no-data'>
                    <h3>No Recruiter Profile Found</h3>
                </div>
            ) : (
                items.map((profile, index) => (
                    <div key={index} className='dtl-container'>
                        <div className='p-img-cont'>
                            <img
                                src={UserProfileimg}
                                className='recruiter-profile-img'
                                alt="Recruiter Profile"
                            />
                            <div className='prfle-name'>
                                {profile.name}</div>

                            <br></br><hr></hr>

                            <p className='dtls'><img src={PhoneImg} className='dtl-img' /><a href={`tel:${profile.mno}`} className='clickable-info'>+91{profile.mno}</a></p>

                            <div className='dtls'><img src={LnkdinImg} className='dtl-img' /> <a className="clickable-info" href={profile.linkedIn} target="_blank" rel="noopener noreferrer">{profile.linkedIn}</a></div>

                            <p className='dtls'><img src={MailImg} className='dtl-img' /><a href={`mailto:${profile.email}`} className='clickable-info'>{profile.email}</a></p>
                        </div>
                        

                        <div className='recruiter-profile-details-cont'>

                            <div className='dtl-head'> {profile.company}</div>

                            <div className='recruiter-profile-details'>

                                <div className='dtls-left'>

                                    <p className='dtls'><b>Gender:</b> {profile.gender}</p>
                                    <p className='dtls'><b>Degree:</b> {profile.degree}</p>
                                    <p className='dtls'><b>Institute:</b> {profile.institude}</p>
                                    <div className='dtls'><b>Description:</b> {profile.desc}</div>
                                </div>

                                <div className='dtls-right'>
                                    <div className='dtls'><b>Expertise:</b> {profile.expertise}</div>
                                    <div className='dtls'><b>Job:</b> {profile.job}</div>
                                    <div className='dtls'><b>Key Skill:</b> {profile.keyskill}</div>
                                    <p className='dtls'><b>Experience:</b> {profile.exp} years</p>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}

            <div className='Show'></div>
        </div>
    );
}

export default RecuriterProfileCard;
