import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../CssFiles/DemoPageDesign.module.css";
// import styles from "../CssFiles/HomePageDesign.module.css";

export default function DemoPage(){
    return<>
    <NavBar/>
    <div className= {styles.DemoPage} >
            <div className= {styles.DemoPage1} >
        <div>
            <h1 className= {styles.TheUltimate}  style ={{textAlign: "left"}} >Get a super quick in-depth demo of DeskTime</h1>
            <p className = {styles.p1} >What’s the best way to find out if DeskTime works for you? Try it yourself! We’ll give you a personalized 1:1 DeskTime demo and answer any questions you might have.</p>
            <button className= {styles.button1} >BOOK A DEMO</button>
            <button className= {styles.DemoButton1} >START A FREE TRAIL</button>
            
        </div>
        <div className= {styles.HomePage1a} >
            <img src="https://desktime.com/static/web/demo/demo-of-desktime.png" alt="" />
        </div>
        </div>
        <div className= {styles.DemoPage2} >
            <div><img  src="https://desktime.com/static/web/demo/magnify.svg" alt="sixtImage" />
            <p className= {styles.p2} >Demo account</p>
            <p className= {styles.p3} >Learn how DeskTime tracks time, explore the dashboard and try all the available features in this self-guided DeskTime demo.</p>
            
            </div>
            <div><img  src="https://desktime.com/static/web/demo/chat.svg" alt="sixtImage" />
            <p className= {styles.p2} >Live demo</p>
            <p className= {styles.p3}  >Sign up for a 1:1 demo call with our product expert, take a personalized tour and get answers to any questions you might have.</p>
            </div>
            <div><img  src="https://desktime.com/static/web/demo/webinar.svg" alt="sixtImage" />
            <p className= {styles.p2} >webinars</p>
            <p className= {styles.p3}  >Watch on-demand webinars and tutorials to make sure you get the most out of all the features DeskTime has to offer.</p>
            </div>
            <div><img  src="https://desktime.com/static/web/demo/form.svg" alt="sixtImage" />
            <p className= {styles.p2} >Sign Up</p>
            <p className= {styles.p3}  >Find out what time tracking means, add team members, and test the project feature for effective workflow management.</p>
            </div>
           
        </div>
        </div>
           
        <div className= {styles.DemoPage3} >
        <div>
            <h1 className= {styles.TheUltimate}  style ={{textAlign: "left"}} >DeskTime for Teams</h1>
            <p className = {styles.p1} >Watch this tutorial to learn how to keep track of your employees' work with the Admin features of DeskTime, find out how to add team members, manage work schedules, create invoices and reports, and more.</p>
            <p className = {styles.p1} >With DeskTime you can plan and create shifts, manage absences and use the Project tracking feature to see who is working on what and for how long.</p>
            <ul className= {styles.unlisted}>
                    <h3>No software installation necessary</h3>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Fully automated time tracker</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> App URL & Document title reacking</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Project and task tracking</li>
                    </ul>
            <button className= {styles.button1} >BOOK A DEMO</button>
            <button className= {styles.DemoButton1} >START A FREE TRAIL</button>
            
        </div>
        <div className= {styles.HomePage1a} >
            <img src="https://desktime.com/static/web/demo/demo-of-desktime.png" alt="" />
        </div>
        </div>

    <Footer/>
    </>
}