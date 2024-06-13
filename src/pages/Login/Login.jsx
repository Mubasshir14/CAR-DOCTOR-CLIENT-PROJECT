
// import { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // const { signIn } = useContext(AuthContext);
    const {signIn} = useAuth();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successfully Completed');
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Login Failed');
            });
    };

    return (
        <div className="hero min-h-screen">
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" className="border-dashed border-2 border-gray-200 p-3 rounded-lg" />
                </div>
                <div className="card w-1/2 shrink-0 max-w-sm shadow-lg border-2 border-gray-100 bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login</h1>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 mb-6">
                            <button className="btn text-white bg-[#FF3811]">Sign In</button>
                        </div>
                        <p className="text-center text-[#444444] mb-6">or Sign In With</p>
                        <div className="flex justify-center gap-3">
                            <Link className="btn rounded-full"><FaSquareFacebook /></Link>
                            <Link className="btn rounded-full"><FcGoogle /></Link>
                            <Link className="btn rounded-full"><FaGithub /></Link>
                        </div>
                        <p className="text-center mb-6 mt-3">Yet have no account? <Link to='/signup' className="text-[#FF3811]">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
















// import { useContext } from 'react';
// import login from '../../assets/images/login/login.svg';
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa6";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const Login = () => {
//     const { signIn } = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();
//     console.log(location);

//     const handleLogIn = e => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         // console.log(email, password);

//         signIn(email, password)
//             .then(result => {
//                 const loggedInUser = result.user;
//                 console.log(loggedInUser);

//                 const user = { email };
//                 // get access token
//                 axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
//                     .then(res => {
//                         console.log(res.data);
//                         if (res.data.success) {
//                             toast.success('Login Successfully Completed');
//                             navigate(location?.state ? location?.state : '/')
//                         }
//                     })
//             })
//             .catch(error => {
//                 console.log(error.message);
//                 toast.error('Login Failed');
//             });
//     };

//     return (
//         <div className="hero min-h-screen">
//             <ToastContainer />
//             <div className="hero-content flex-col lg:flex-row gap-20">
//                 <div className="text-center w-1/2 lg:text-left">
//                     <img src={login} alt="" className="border-dashed border-2 border-gray-200 p-3 rounded-lg" />
//                 </div>
//                 <div className="card w-1/2 shrink-0 max-w-sm shadow-lg border-2 border-gray-100 bg-base-100">
//                     <form onSubmit={handleLogIn} className="card-body">
//                         <h1 className="text-center text-3xl font-bold">Login</h1>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-bold">Email</span>
//                             </label>
//                             <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label font-bold">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6 mb-6">
//                             <button className="btn text-white bg-[#FF3811]">Sign In</button>
//                         </div>
//                         <p className="text-center text-[#444444] mb-6">or Sign In With</p>
//                         <div className="flex justify-center gap-3">
//                             <Link className="btn rounded-full"><FaSquareFacebook /></Link>
//                             <Link className="btn rounded-full"><FcGoogle /></Link>
//                             <Link className="btn rounded-full"><FaGithub /></Link>
//                         </div>
//                         <p className="text-center mb-6 mt-3">Yet have no account? <Link to='/signup' className="text-[#FF3811]">Sign Up</Link></p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
