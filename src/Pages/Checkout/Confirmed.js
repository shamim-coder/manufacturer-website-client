import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const Confirmed = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <section>
            <div className="container mx-auto text-center">
                <div className="lg:w-8/12 mx-auto p-5 md:p-14">
                    <h3 className="text-4xl font-semibold">Your Order has been received</h3>
                    <FontAwesomeIcon className="my-5 bg-success p-5 text-4xl text-white rounded-full w-16 h-16" icon={faCheck} />
                    <h4 className="font-body text-2xl mb-3">Thank you for your purchase!</h4>
                    <p className="text-lg mb-3">
                        Your Order ID is : <span className="text-primary">{id}</span>
                    </p>
                    <p>You will received an order confirmation email with details of your order.</p>
                    <button onClick={() => navigate("/dashboard/my-orders")} className="btn btn-primary mt-5">
                        Manage Orders
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Confirmed;
