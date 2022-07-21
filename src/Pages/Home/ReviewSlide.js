import React from "react";
import { SwiperSlide } from "swiper/react";
import Rating from "../Dashboard/AddReview/Rating";


const ReviewSlide = ({ review }) => {
    return (
        <>
            <SwiperSlide>
                <div class="review py-10 px-7 text-gray-800 border-2 bg-white">
                    <div class="mb-2">
                        <q class="mb-2 text-center text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse.</q>
                        <div class="flex flex-col items-center justify-center">
                            <div class="my-3 w-16 h-16 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img" class="object-cover object-center w-full h-full" />
                            </div>
                            <h5 class="font-semibold tracking-wider text-primary text-xl">John Doe</h5>
                            <p class="text-sm text-gray-600 mb-2">CEO / Founder</p>
                            <Rating rating={3} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </>
    );
};

export default ReviewSlide;
