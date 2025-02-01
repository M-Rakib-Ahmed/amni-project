import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin =(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email);
        const password =e.target.password.value;
        console.log(password);
      
    }
    return (

        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Enter your email" />
                    <label className="fieldset-label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Enter your password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
            <p className="text-center pb-5">New to this website? please <Link className="text-green-700 underline" to={'/register'}>Register</Link></p>
        </div>


    );
};

export default Login;