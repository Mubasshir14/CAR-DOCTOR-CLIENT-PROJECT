import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg';
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('Registration Successfully Completed'); 
            })
            .catch((error) => {
                console.log(error.message);
                toast.error('Registration Failed'); 
            });
    };

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" className="border-dashed border-2 border-gray-200 p-3 rounded-lg" />
                </div>
                <div className="card w-1/2 shrink-0 max-w-sm shadow-lg border-2 border-gray-100 bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3 mb-3">
                            <button className="btn text-white bg-[#FF3811]">Sign Up</button>
                        </div>
                        <p className="text-center text-[#444444] mb-6">or Sign In With</p>
                        <div className="flex justify-center gap-3">
                            <Link className="btn rounded-full"><FaSquareFacebook></FaSquareFacebook></Link>
                            <Link className="btn rounded-full "><FcGoogle></FcGoogle></Link>
                            <Link className="btn rounded-full"><FaGithub></FaGithub></Link>
                        </div>
                        <p className="text-center mb-3 mt-3">Have an account?<Link to='/login' className="text-[#FF3811]">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
