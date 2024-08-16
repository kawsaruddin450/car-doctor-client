import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkoout = () => {
    const selectedService = useLoaderData();
    const { _id, title, price, img } = selectedService;
    const {user} = useContext(AuthContext);

    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const name = firstName + " " + lastName;
        const email = form.email.value;
        const phone = form.phone.value;

        const checkout = {
            name,
            email,
            phone,
            service: _id,
            price: price,
            img: img,
            title: title,
        }
        fetch('https://car-doctor-server-fawn-six.vercel.app/checkouts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(checkout),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Book Service: {title}</h2>
            <h2 className="text-xl font-semibold text-center">Price: ${price}</h2>
            <div className="card bg-[#F3F3F3] w-full lg:w-1/2 mx-auto my-28 shadow-2xl">
                <form onSubmit={handleCheckout} className="card-body">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="form-control">
                            <input type="text" placeholder="first name" name="firstname" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="last name" name="lastname" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="your phone" name="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="your email" defaultValue={user?.email} name="email" className="input input-bordered" required readOnly />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Checkout" className="btn btn-error text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkoout;