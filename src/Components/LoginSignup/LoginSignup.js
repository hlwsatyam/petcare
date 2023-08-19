import { useEffect, useState } from 'react';
import './LoginSignup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const LoginSignup = () => {
    const [Login, setLogin] = useState(true)

    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: '',
        repass: ""
    })
    useEffect(() => {
        console.log(user)
    })

    const navigate = useNavigate()
    const LoginHandler = () => {
        navigate('/petregistration')
    }
    const RegistraionHandler = async () => {
        await axios.post('http://localhost:8000/user/registration', { user }).then((res) => {
            alert(res.data)
        })
        navigate('/petregistration')
    }
    const EmailChanger = (e) => {
        const { value } = e.target
        setUser({
            ...user,
            email: value
        })
    }
    const PassChanger = (e) => {
        const { value } = e.target
        setUser({
            ...user,
            pass: value
        })
    }
    const RepassChanger = (e) => {
        const { value } = e.target
        setUser({
            ...user,
            repass: value
        })
    }
    const NameChanger = (e) => {
        const { value } = e.target
        setUser({
            ...user,
            name: value
        })
    }
    return (
        <div>
            {
                Login ? (<section class="" >
                    <div class="container py-5">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col col-xl-10">
                                <div class="card" >
                                    <div class="row g-0">
                                        <div class="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                                alt="login form" class="img-fluid" />
                                        </div>
                                        <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div class="card-body p-4 p-lg-5 text-black">
                                                <form>
                                                    <div class="d-flex align-items-center mb-3 pb-1">
                                                        <i class="" >
                                                            <img src='https://t3.ftcdn.net/jpg/04/54/83/00/360_F_454830025_YReMhvjcv4BJLbzPsLTxVaZUG5hVJW7R.jpg' className="img-fluid  
                                                        w-50
                                                        "/>
                                                        </i>
                                                    </div>
                                                    <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                    <div class="form-outline mb-4">
                                                        <input onChange={EmailChanger} type="email" id="form2Example17" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form2Example17">Email address</label>
                                                    </div>

                                                    <div class="form-outline mb-4">
                                                        <input onChange={PassChanger} type="password" id="form2Example27" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form2Example27">Password</label>
                                                    </div>

                                                    <div class="pt-1 mb-4">
                                                        <button onClick={() => {
                                                            LoginHandler()
                                                            setUser({
                                                                name: "",
                                                                email: "",
                                                                pass: '',
                                                                repass: ""
                                                            })

                                                        }} class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                                    </div>

                                                    <a class="small text-muted" href="#!">Forgot password?</a>
                                                    <p class="mb-5 pb-lg-2">Don't have an account? <a

                                                        onClick={() => {
                                                            setLogin(false)
                                                            setUser({
                                                                name: "",
                                                                email: "",
                                                                pass: '',
                                                                repass: ""
                                                            })


                                                        }} href="#!"
                                                    >Sign In!</a></p>
                                                    <a href="#!" class="small text-muted">Terms of use.</a>
                                                    <a href="#!" class="small text-muted">Privacy policy</a>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >) : (
                    <section class=" bg-image"
                    >
                        <div class="mask d-flex align-items-center  gradient-custom-3">
                            <div class="container ">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div class="card" >
                                            <div class="card-body p-5">
                                                <h2 class="text-uppercase text-center mb-5">Create an account</h2>
                                                <form>
                                                    <div class="form-outline mb-4">
                                                        <input onChange={NameChanger} type="text" id="form3Example1cg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example1cg">Your Name</label>
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <input onChange={EmailChanger} type="email" id="form3Example3cg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example3cg">Your Email</label>
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <input onChange={PassChanger} type="password" id="form3Example4cg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example4cg">Password</label>
                                                    </div>
                                                    <div class="form-outline mb-4">
                                                        <input onChange={RepassChanger} type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                                                        <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                                    </div>
                                                    <div class="form-check d-flex justify-content-center mb-5">
                                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                        <label class="form-check-label" for="form2Example3g">
                                                            I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                                                        </label>
                                                    </div>
                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" onClick={() => RegistraionHandler()}
                                                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Sign In</button>
                                                    </div>
                                                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <a
                                                        onClick={() => {
                                                            setUser({
                                                                name: "",
                                                                email: "",
                                                                pass: '',
                                                                repass: ""
                                                            })
                                                            setLogin(true)

                                                        }} href="#!"
                                                        class="fw-bold text-body"><u>Login here</u></a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
            }
        </div >
    );
};
export default LoginSignup;