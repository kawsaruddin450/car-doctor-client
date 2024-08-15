import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            const user = result.user;
            const userEmail = {
                email : user.email,
            }
            
            fetch('http://localhost:5000/jwt', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userEmail)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //warning: local storage is not the best option
                localStorage.setItem('car-access-token', data.token);
                navigate(from, {replace: true});
            })
        })
        .catch(error => {
            console.log(error.code);
        })
    }
    return (
        <div className="hero min-h-screen lg:container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 lg:mr-20">
                    <img src={login} alt="Login page banner image" className='' />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-medium text-center text-slate-900">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value="Log In" className="btn btn-error text-white" />
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-center'>New here? <Link to='/signup' className='text-error link link-hover'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;