// import React, { useEffect } from 'react';
// import login from "./styles/LoginForm.module.css"

// const LoginForm = () => {
//   useEffect(() => {
    
//   }, []);

//   function toggleForm(formType) {
//     const signupForm = document.querySelector('.form-wrapper:first-child');
//     const loginForm = document.querySelector('.form-wrapper:last-child');

//     if (signupForm && loginForm) {
//       if (formType === 'signup') {
//         signupForm.style.display = 'block';
//         loginForm.style.display = 'none';
//       } else if (formType === 'login') {
//         signupForm.style.display = 'none';
//         loginForm.style.display = 'block';
//       }
//     } else {
//       console.error('Form elements not found in the DOM');
//     }
//   }

//   return (
//     <>

// <div class="form-wrapper">
//     <div class="form-side">
//         <form class="my-form">
//             <div class="form-welcome-row">
//                 <h1>Sign Up Here &#x1F44B;</h1>
//             </div>
//             <div class="socials-row">
//                 <a href="#" title="Use Google">
//                     <img src="/img/assets/google.png" alt="Google"/>Use Google
//                 </a>
//                 <a href="#" title="Use Apple">
//                     <img src="/img/assets/apple.png" alt="Apple"/> Use Apple
//                 </a>
//             </div>
//             <div class="divider">
//                 <div class="divider-line"></div> Or <div class="divider-line"></div>
//             </div>
//             <div class="text-field">
//                 <label for="email">Email:
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         autocomplete="off"
//                         placeholder="Your Email"
//                         required
//                     />
//                 </label>
//             </div>
//             <div class="text-field">
//                 <label for="password">Password:
//                     <input
//                         id="password"
//                         type="password"
//                         name="password"
//                         placeholder="Your Password"
//                         title="Minimum 6 characters at least 1 Alphabet and 1 Number"
//                         pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
//                         required
//                     />
//                 </label>
//             </div>
//             <button type="submit" class="my-form__button">
//                 Sign Up
//             </button>
//             <div class="my-form__actions">
//                 <a href="#" title="Login" onClick={() => toggleForm('login')}>Already have an account?</a>
//             </div>
//         </form>
//     </div>
// </div>

// <div class="form-wrapper" style={{display: 'none'}}>
//     <div class="form-side">
//         <form class="my-form">
//             <div class="form-welcome-row">
//                 <h1>Login Here &#x1F44F;</h1>
//             </div>
//             <div class="socials-row">
//                 <a href="#" title="Use Google">
//                     <img src="/img/assets/google.png" alt="Google"/>Use Google
//                 </a>
//                 <a href="#" title="Use Apple">
//                     <img src="/img/assets/apple.png" alt="Apple"/> Use Apple
//                 </a>
//             </div>
//             <div class="divider">
//                 <div class="divider-line"></div> Or <div class="divider-line"></div>
//             </div>
//             <div class="text-field">
//                 <label for="email">Email:
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         autocomplete="off"
//                         placeholder="Your Email"
//                         required
//                     />
//                 </label>
//             </div>
//             <div class="text-field">
//                 <label for="password">Password:
//                     <input
//                         id="password"
//                         type="password"
//                         name="password"
//                         placeholder="Your Password"
//                         title="Minimum 6 characters at least 1 Alphabet and 1 Number"
//                         pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
//                         required
//                     />
//                 </label>
//             </div>
//             <button type="submit" class="my-form__button">
//                 Login
//             </button>
//             <div class="my-form__actions">
//                 <a href="#" title="Sign Up" onClick={() => toggleForm('signup')}>Don't have an account?</a>
//             </div>
//         </form>
//     </div>
// </div>
     
//     </>
//   );
// };

// export default LoginForm;



// import React, { useEffect } from 'react';
// import login from "/styles/LoginForm.module.css"

// const LoginForm = () => {
//   useEffect(() => {
    
//   }, []);

//  function toggleForm(formType) {
//   const signupForm = document.querySelector('.form_wrapper:first-of-type');
//   const loginForm = document.querySelector('.form_wrapper:last-of-type');

//   if (signupForm && loginForm) {
//     if (formType === 'signup') {
//       signupForm.style.display = 'block';
//       loginForm.style.display = 'none';
//     } else if (formType === 'login') {
//       signupForm.style.display = 'none';
//       loginForm.style.display = 'block';
//     }
//   } else {
//     console.error('Form elements not found in the DOM');
//   }
// }
//   return (
//     <>

// <div className={login.form_wrapper}>
//     <div className={login.form_side}>
//         <form className={login.my_form}>
//             <div className={login.form_welcome_row}>
//                 <h1>Sign Up Here &#x1F44B;</h1>
//             </div>
//             <div className={login.socials_row}>
//                 <a href="#" title="Use Google">
//                     <img src="/img/assets/google.png" alt="Google"/>Use Google
//                 </a>
//                 <a href="#" title="Use Apple">
//                     <img src="/img/assets/apple.png" alt="Apple"/> Use Apple
//                 </a>
//             </div>
//             <div className={login.divider}>
//                 <div className={login.divider_line}></div> Or <div className={login.divider_line}></div>
//             </div>
//             <div className={login.text_field}>
//                 <label for="email">Email:
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         autoComplete="off"
//                         placeholder="Your Email"
//                         required
//                     />
//                 </label>
//             </div>
//             <div className={login.text_field}>
//                 <label for="password">Password:
//                     <input
//                         id="password"
//                         type="password"
//                         name="password"
//                         placeholder="Your Password"
//                         title="Minimum 6 characters at least 1 Alphabet and 1 Number"
//                         pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
//                         required
//                     />
//                 </label>
//             </div>
//             <button type="submit" className={login.my_form__button}>
//                 Sign Up
//             </button>
//             <div className={login.my_form__actions}>
//             <a href="#" title="Login" onClick={() => toggleForm('login')}>Already have an account?</a>
//             </div>
//         </form>
//     </div>
// </div>

// <div className={login.form_wrapper} style={{display: 'none'}}>
//     <div className={login.form_side}>
//         <form className={login.my_form}>
//             <div className={login.form_welcome_row}>
//                 <h1>Login Here &#x1F44F;</h1>
//             </div>
//             <div className={login.socials_row}>
//                 <a href="#" title="Use Google">
//                     <img src="/img/assets/google.png" alt="Google"/>Use Google
//                 </a>
//                 <a href="#" title="Use Apple">
//                     <img src="/img/assets/apple.png" alt="Apple"/> Use Apple
//                 </a>
//             </div>
//             <div className={login.divider}>
//                 <div className={login.divider_line}></div> Or <div className={login.divider_line}></div>
//             </div>
//             <div className={login.text_field}>
//                 <label for="email">Email:
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         autoComplete="off"
//                         placeholder="Your Email"
//                         required
//                     />
//                 </label>
//             </div>
//             <div className={login.text_field}>
//                 <label for="password">Password:
//                     <input
//                         id="password"
//                         type="password"
//                         name="password"
//                         placeholder="Your Password"
//                         title="Minimum 6 characters at least 1 Alphabet and 1 Number"
//                         pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
//                         required
//                     />
//                 </label>
//             </div>
//             <button type="submit" className={login.my_form__button}>
//                 Login
//             </button>
//             <div className={login.my_form__actions}>
//             <a href="#" title="Sign Up" onClick={() => toggleForm('signup')}>Don't have an account?</a>
//             </div>
//         </form>
//     </div>
// </div>
     
//     </>
//   );
// };

// export default LoginForm;





import React, { useState } from 'react';
import login from "/styles/LoginForm.module.css"

const LoginForm = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);

  function toggleForm(formType) {
    setShowSignupForm(formType === 'signup');
  }

  return (
    <>
            <div className={login.form_wrapper} style={{ display: showSignupForm ? 'block' : 'none' }}>


                <div className={login.form_side}>
                    <form className={login.my_form}>
                        <div className={login.form_welcome_row}>
                            <h1>Sign Up Here &#x1F44B;</h1>
                        </div>
                        <div className={login.socials_row}>
                            <a href="#" title="Use Google">
                                <img src="/img/assets/google.png" alt="Google" />Use Google
                            </a>
                            <a href="#" title="Use Apple">
                                <img src="/img/assets/apple.png" alt="Apple" /> Use Apple
                            </a>
                        </div>
                        <div className={login.divider}>
                            <div className={login.divider_line}></div> Or <div className={login.divider_line}></div>
                        </div>
                        <div className={login.text_field}>
                            <label for="email">Email:
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    placeholder="Your Email"
                                    required
                                />
                            </label>
                        </div>
                        <div className={login.text_field}>
                            <label for="password">Password:
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                                    required
                                />
                            </label>
                        </div>
                        <button type="submit" className={login.my_form__button}>
                            Sign Up
                        </button>
                        <div className={login.my_form__actions}>
                            <a href="#" title="Login" onClick={() => toggleForm('login')}>Already have an account?</a>
                        </div>
                    </form>
                </div>




            </div>

            <div className={login.form_wrapper} style={{ display: showSignupForm ? 'none' : 'block' }}>

                <div className={login.form_side}>
                    <form className={login.my_form}>
                        <div className={login.form_welcome_row}>
                            <h1>Login Here &#x1F44F;</h1>
                        </div>
                        <div className={login.socials_row}>
                            <a href="#" title="Use Google">
                                <img src="/img/assets/google.png" alt="Google" />Use Google
                            </a>
                            <a href="#" title="Use Apple">
                                <img src="/img/assets/apple.png" alt="Apple" /> Use Apple
                            </a>
                        </div>
                        <div className={login.divider}>
                            <div className={login.divider_line}></div> Or <div className={login.divider_line}></div>
                        </div>
                        <div className={login.text_field}>
                            <label for="email">Email:
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    placeholder="Your Email"
                                    required
                                />
                            </label>
                        </div>
                        <div className={login.text_field}>
                            <label for="password">Password:
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Your Password"
                                    title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                                    required
                                />
                            </label>
                        </div>
                        <button type="submit" className={login.my_form__button}>
                            Login
                        </button>
                        <div className={login.my_form__actions}>
                            <a href="#" title="Sign Up" onClick={() => toggleForm('signup')}>Don't have an account?</a>
                        </div>
                    </form>
                </div>



            </div>
        </>
    );
};

export default LoginForm;