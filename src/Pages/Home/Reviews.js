import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SectionTop from "../../Components/SectionTop/SectionTop";
import useReviews from "../../Hooks/useReviews";
import Spinner from "../../Components/Spinner/Spinner";
import Rating from "../Dashboard/AddReview/Rating";
import { useNavigate } from "react-router-dom";
import useProfile from "../../Hooks/useProfile";

const Reviews = () => {
    const { reviews, isLoading } = useReviews();
    const navigate = useNavigate();

    const { profile } = useProfile();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section className="reviews py-14">
            <SectionTop title={"What Our Clients Says"} paragraph="Our clients send us bunch of smiles with our service and love them." />
            <div className="container mx-auto mt-20 mySwiper">
                <div className="mb-16 swiper-wrapper">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review._id}>
                                <div className="review py-10 px-7 text-gray-800 border-2 bg-white">
                                    <div className="mb-2">
                                        <q className="mb-2 text-center text-gray-600">{review.message.split(" ").slice(0, 22).join(" ")}.</q>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="my-3 w-16 h-16 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                                <img src={review.image} alt="" />
                                            </div>
                                            <h5 className="font-semibold tracking-wider text-primary text-xl">{review.name}</h5>

                                            <p className="text-sm text-gray-600 ">{review.designation}</p>
                                            <p className="text-sm text-accent mb-2">{review.company}</p>
                                            <Rating rating={review.rating} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
                {profile?.role !== "admin" && (
                    <button onClick={() => navigate("/dashboard/add-review")} className="btn btn-primary mx-auto block px-10">
                        Write a Review
                    </button>
                )}
            </div>
        </section>
    );
};

export default Reviews;
