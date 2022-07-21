import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SectionTop from "../../Components/SectionTop/SectionTop";
import useReviews from "../../Hooks/useReviews";
import Spinner from "../../Components/Spinner/Spinner";
import Rating from "../Dashboard/AddReview/Rating";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
    const { reviews, isLoading } = useReviews();
    const navigate = useNavigate();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <section className="reviews py-14">
            <SectionTop title={"What Our Clients Says"} paragraph="Our clients send us bunch of smiles with our service and love them." />
            <div class="container mx-auto mt-20 mySwiper">
                <div class="mb-16 swiper-wrapper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {reviews.map((review) => (
                            <SwiperSlide>
                                <div class="review py-10 px-7 text-gray-800 border-2 bg-white">
                                    <div class="mb-2">
                                        <q class="mb-2 text-center text-gray-600">{review.message.split(" ").slice(0, 22).join(" ")}.</q>
                                        <div class="flex flex-col items-center justify-center">
                                            <div class="my-3 w-16 h-16 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                                <img src={review.image} alt="" />
                                            </div>
                                            <h5 class="font-semibold tracking-wider text-primary text-xl">{review.name}</h5>

                                            <p class="text-sm text-gray-600 ">{review.designation}</p>
                                            <p class="text-sm text-accent mb-2">{review.company}</p>
                                            <Rating rating={review.rating} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div class="swiper-pagination"></div>
                <button onClick={() => navigate("/dashboard/add-review")} className="btn btn-primary mx-auto block px-10">
                    Write a Review
                </button>
            </div>
        </section>
    );
};

export default Reviews;
