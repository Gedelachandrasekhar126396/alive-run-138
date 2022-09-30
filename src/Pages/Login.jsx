import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../CssFiles/SignUpDesign.module.css";

export default function LoginPage(){
    return (<>
    <NavBar/>
        <div className= {styles.SignUpPage} >
            <h1>Log in to DeskTime</h1>
            
            <form id = {styles.signUpBox} >
             <span className= {styles.inputPara}  >Email</span>   
             <input placeholder="Type in your email address" className= {styles.signUpInput} />
             <span className= {styles.inputPara}  >Password</span>   
             <input placeholder="Type in your  password" className= {styles.signUpInput} />
             <input type="submit" value = "LOGIN" className= {styles.signUpButton} />
            </form>
            <h4 className= {styles.Strong3} >I forgot my password</h4>
            <p> <span>Don't have any account yet?</span> <strong className= {styles.Strong2} >Sign up here!</strong> </p>
            <div className= {styles.socialMedia} >
                <h5>Or connect with</h5>
                <div>
                    <img className= {styles.icons}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4kTT4ua1QKoxq1rmZLcBhP7cDJm1MMhpBOzmQr_zl8SxVVZ9KLDbA5qj-Oh79qBnXso&usqp=CAU" alt="facebookIcon" />
                    <img className= {styles.icons} src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png" alt="twitterIcon" />
                    <img className= {styles.icons} src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="linkedinLogo" />
                    <img className= {styles.icons} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="googleLogo" />
                    <img className= {styles.icons} src="https://w7.pngwing.com/pngs/924/257/png-transparent-apple-electric-car-project-cupertino-apple-iphone-electronics-heart-logo.png" alt="iphoneLogo" />

                </div>
            </div>
          

        </div>
        <Footer/>
        </> )

    
}