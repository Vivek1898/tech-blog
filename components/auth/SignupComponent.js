import { useState, useEffect } from 'react';
import { signup, isAuth, preSignup } from '../../actions/auth';
import Router from 'next/router';
import Link from 'next/link';
import LoginGoogle from './LoginGoogle';
import toast, { Toaster } from 'react-hot-toast';
// import LoginFacebook from './LoginFacebook';

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });
    const[loadingf, setloadingf] = useState(false);

    const { name, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);
   
    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { name, email, password };

        preSignup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
                //toast("Signup Success!")
                setloadingf(true);
         //    Router.push(`/signin`)
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');
    const showLoadingf = () => (loadingf ? <button className="btn btn-outline-success mb-3 btn-lg" onClick={()=> Router.push('/signin')}>Login</button> : '');
    const signupForm = () => {
        return (
           

            <form onSubmit={handleSubmit}>
              
                <div className="form-group">
                    <input
                        value={name}
                        onChange={handleChange('name')}
                        type="text"
                        className="form-control"
                        placeholder="Type your name"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div>
                    <button className="btn btn-primary">Signup</button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showLoadingf()}
            <LoginGoogle />
            {/* <LoginFacebook /> */}
            {showForm && signupForm()}
            <br />
            {/* <Link href="/auth/password/forgot">
                <a className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link> */}
        </React.Fragment>
    );
};

export default SignupComponent;
