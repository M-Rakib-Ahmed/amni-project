

const Login = () => {
    return (

        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </div>


    );
};

export default Login;