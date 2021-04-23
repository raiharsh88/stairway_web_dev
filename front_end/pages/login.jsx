import React from 'react'
import Head from 'next/head';



const HeadComp = function (props) {


    return (
        <Head>
            <title>Login Page</title>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap" rel="stylesheet"></link>

            {/* <script src="https://kit.fontawesome.com/50f0e7155c.js" crossorigin="anonymous"></script> */}

            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                crossOrigin="anonymous"
            />        </Head>
    )
}



const Login = function () {
    return (
        <>
            <HeadComp />

            <div className="container">
                <div className="form-container">


                    <div className="form-tab">

                        <h1>Login</h1>


                        <div className="input-tab">

                            <span>Username</span>
                            <input type="email" name="email" placeholder="Email" />

                        </div>


                        <div className="input-tab">

                            <span>Password</span>
                            <input type="password" name="password" placeholder="password" />

                        </div>


                        <div className="submit-button">

                            <button>Submit</button>
                        </div>


                        <div className="links-tab">
                            <a href="/forgot-password">Forgot password</a> <a href="/register">Not registered? Register</a>
                        </div>


                        <div className="social-tab">

                            <div className="social-button">
                                <i className="fab fa-facebook-f"></i>
                            </div>

                            <div className="social-button">
                                <i className="fab fa-google"></i>                            </div>

                        </div>
                    </div>





                </div>

                <div className="canvas">

                    <div className="slogan">
                        <h1>Organise all your tasks</h1>
                    </div>
                </div>

            </div>



        </>
    )
}



export default Login;
