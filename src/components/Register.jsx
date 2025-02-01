

const Register = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input type="email" className="input" placeholder="Enter you email" />
                    <label className="fieldset-label">Password</label>
                    <input type="password" className="input" placeholder="Enter your password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;