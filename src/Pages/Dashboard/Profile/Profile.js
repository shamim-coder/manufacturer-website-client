import React from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import useProfile from "../../../Hooks/useProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin, faGithub, faTwitter, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEdit, faPencil } from "@fortawesome/free-solid-svg-icons";
import ContactInfoEditModal from "./ContactInfoEditModal";
import BasicInfoEditModal from "./BasicInfoEditModal";
import SocialUpdateModal from "./SocialUpdateModal";
import "./Profile.css";
import UpdateProfileImage from "./UpdateProfileImage";

const Profile = () => {
    const { profile, isLoading, refetch } = useProfile();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section>
            <div className="sm:flex gap-10 my-10">
                <div className="relative profile-image mb-5">
                    <img className="sm:w-[200px] sm:h-[200px] object-cover shadow-lg p-2" src={profile?.image} alt="" />
                    <label for="profile-profile-picture" className="profile-label flex justify-center items-center cursor-pointer absolute top-0 left-0 h-full w-full">
                        <FontAwesomeIcon className="text-success" icon={faPencil} />
                    </label>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-1">{profile.name}</h2>
                    <p className="capitalize">{profile.role ? profile.role : "User"}</p>

                    <div className="mt-10">
                        <h4 className="text-xl mb-3">
                            Connect with me{" "}
                            <label for="social-profile-modal" className="cursor-pointer">
                                <FontAwesomeIcon className="text-success ml-5" icon={faEdit} />
                            </label>
                        </h4>
                        <div className="flex gap-4 text-xl">
                            {profile?.facebook && (
                                <a className="tooltip tooltip-primary" data-tip="Facebook" href={profile?.facebook}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            )}

                            {profile?.linkedin && (
                                <a className="tooltip tooltip-primary" data-tip="LinkedIn" href={profile?.linkedin}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            )}

                            {profile?.github && (
                                <a className="tooltip tooltip-primary" data-tip="Github" href={profile?.github}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            )}

                            {profile?.twitter && (
                                <a className="tooltip tooltip-primary" data-tip="Twitter" href={profile?.twitter}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            )}
                            {profile?.stackOverflow && (
                                <a className="tooltip tooltip-primary" data-tip="Stack Overflow" href={profile?.stackOverflow}>
                                    <FontAwesomeIcon icon={faStackOverflow} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-20 my-10">
                <div className="order-2 sm:order-1">
                    <div className="education mb-5">
                        <h3 className="mb-3 text-2xl font-semibold">Education</h3>
                        <div className="mb-5">
                            <h4>Secondary School Certificate</h4>
                            <p>2006</p>
                            <p>Humanities</p>
                        </div>

                        <div>
                            <h4>Higher Secondary Certificate</h4>
                            <p>2014</p>
                            <p>Statistic</p>
                        </div>
                    </div>
                    <div className="skill">
                        <h3 className="mb-3 text-2xl font-semibold">Skill</h3>

                        <div>
                            <h4>HTML5</h4>
                            <h4>JavaScript</h4>
                            <h4>React.js</h4>
                            <h4>Tailwind CSS</h4>
                            <h4>Node.js</h4>
                            <h4>Express js</h4>
                            <h4>mongoDB</h4>
                        </div>
                    </div>
                </div>
                <div className="order-1 sm:order-2">
                    <h3 className="mb-3 text-2xl font-semibold">
                        Contact Information{" "}
                        <label for="profile-modal" className="cursor-pointer">
                            <FontAwesomeIcon className="text-success ml-5" icon={faEdit} />
                        </label>
                    </h3>
                    <table className="mb-5">
                        <tbody>
                            {profile?.phone && (
                                <tr className="leading-loose">
                                    <td className="w-28">Phone: </td>
                                    <td>
                                        <a className="font-body text-blue-500" href={`tel:+:${profile?.phone}`}>
                                            +880 {profile.phone}
                                        </a>
                                    </td>
                                </tr>
                            )}

                            {profile?.address && (
                                <tr className="leading-loose">
                                    <td className="w-28">Address: </td>
                                    <td>{profile?.address}</td>
                                </tr>
                            )}

                            <tr className="leading-loose">
                                <td className="w-28">Email: </td>
                                <td>
                                    <a className="font-body text-blue-500" href={`mailto:${profile?.email}`}>
                                        {profile.email}
                                    </a>
                                </td>
                            </tr>

                            {profile?.website && (
                                <tr className="leading-loose">
                                    <td className="w-28">Website: </td>
                                    <td>
                                        <a className="font-body text-blue-500" href={`https://${profile?.website}`}>
                                            {profile?.website}
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <h3 className="mb-3 text-2xl font-semibold">
                        Basic Information{" "}
                        <label for="basic-profile-modal" className="cursor-pointer">
                            <FontAwesomeIcon className="text-success ml-5" icon={faEdit} />
                        </label>
                    </h3>
                    <table>
                        <tbody>
                            {profile?.birthday && (
                                <tr>
                                    <td className="w-28">Birthday: </td>
                                    <td>{profile?.birthday}</td>
                                </tr>
                            )}
                            {profile?.birthday && (
                                <tr>
                                    <td>Gender: </td>
                                    <td>{profile?.gender}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <ContactInfoEditModal profile={profile} refetch={refetch} />
            <BasicInfoEditModal profile={profile} refetch={refetch} />
            <SocialUpdateModal profile={profile} refetch={refetch} />
            <UpdateProfileImage profile={profile} refetch={refetch} />
        </section>
    );
};

export default Profile;
