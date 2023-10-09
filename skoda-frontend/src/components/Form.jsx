import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mynavbar from "./Mynavbar";
import Footer from "./Footer";

const Form = () => {
      const navigate=useNavigate()
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        country: '',
        state: '',
        email: '',
        phone: '',
        notes: '',
    })
    function inputHandler(e) {
        setCustomer(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    function submitHandler() {
        console.log(customer)
        // axios
        //   .post('http://127.0.0.1:8000/form/',{...customer})
        //   .then((response) => {
        //     console.log(response.data);
        //   });
        var bodyFormData = new FormData();
        // customer.forEach(field=>console.log(field))
        for (const key in customer) {
            bodyFormData.append(`${key}`, `${customer[key]}`);
        }
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/form/",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
                navigate('/feedback')
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    return (
        <>
      
        <div className="flex flex-col justify-start my-20">
            <h1 className="px-16 py-6 text-4xl font-semibold font-poppins my-5">
                Please fill this details
            </h1>
            <form className="grid grid-cols-3 p-12 container text-start my-3">
                <div className="d-flex justify-content-between">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">First Name</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp"
                    value={customer['firstName']}
                    name="firstName"
                    id="name"
                    onChange={inputHandler}
                    placeholder="Your first name"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Last Name</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp"
                    name="lastName"
                    value={customer['lastName']}
                    id="last-name"
                    onChange={inputHandler}
                    placeholder="Your last name"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Company Name</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp"
                    id="company-name"
                    name="companyName"
                    onChange={inputHandler}
                    value={customer['companyName']}
                    placeholder="Your company name"
                    />
                </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Street address</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp"
                    id="city"
                    name="address"
                    onChange={inputHandler}
                    value={customer['address']}
                    placeholder="Street Address"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Country</label>
                    <input type="country" className="form-control"  aria-describedby="emailHelp"
                    id="country"
                    onChange={inputHandler}
                    name="country"
                    value={customer['country']}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">State</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp"
                    id="cities"
                    name="state"
                    onChange={inputHandler}
                    value={customer['state']}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp"
                    id="email"
                    placeholder="Email"
                    onChange={inputHandler}
                    name="email"
                    value={customer['email']}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Moblie</label>
                    <input  className="form-control"  aria-describedby="emailHelp"
                    id="phone"
                    type="number"
                    name="phone"
                    onChange={inputHandler}
                    value={customer['phone']}
                    placeholder="Contact"
                    />
                </div>
                <div className="mb-3">
                <h1 className="py-6 text-4xl font-semibold font-poppins">
                        Additional Info
                    </h1>
                    <label for="exampleInputEmail1" className="form-label">Order Notes</label>
                    <textarea  className="form-control"  aria-describedby="emailHelp"
                    name="notes"
                    id="notes"
                    cols="30"
                    rows="10"
                    onChange={inputHandler}
                    value={customer['notes']}
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    />
                </div>
                
                <div className="col-span-3 flex justify-center my-6 text-center">
                    <input 
                    className="btn btn-dark text-center"
                        type="button"
                        value="Submit"
                        onClick={submitHandler}
                    />
                </div>
            </form>
        </div>
        
        </>
    );
};

export default Form;
