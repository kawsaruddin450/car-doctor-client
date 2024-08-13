import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const SignUp = () => {
    const handleSignUp = event => {
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen lg:container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 lg:mr-20">
                    <img src={img} alt="Login page banner image" className='' />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-medium text-center text-slate-900">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input type='submit' value="Sign Up" className="btn btn-error text-white" />
                        </div>
                        <div className="form-control mt-6">
                            <p className='text-center'>Already have an account? <Link to='/login' className='text-error link link-hover'>Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;