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
                    
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Keep track of processes and goals.</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Set Automatic time & project tracking.</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Grasp shift and absence Scheduling.</li>
                    </ul>
            <button className= {styles.button1} >START A FREE TRAIL</button>
            <button className= {styles.DemoButton1} >BOOK A DEMO</button>
            
        </div>
        <div className= {styles.HomePage1a} >
            <img id = {styles.Image2} src="https://desktime.com/static/web/demo/yt-dt-teams.png" alt="" />
        </div>
        </div>
        <div className= {styles.DemoPage4} >
        <div className= {styles.HomePage1a} >
            <img id = {styles.Image2} src="https://desktime.com/static/web/demo/yt-dt-freelancers.png" alt="" />
        </div>
        <div>
            <h1 className= {styles.TheUltimate}  style ={{textAlign: "left"}} >DeskTime for Teams</h1>
            <p className = {styles.p1} >Watch this tutorial to learn how to keep track of your employees' work with the Admin features of DeskTime, find out how to add team members, manage work schedules, create invoices and reports, and more.</p>
            <p className = {styles.p1} >With DeskTime you can plan and create shifts, manage absences and use the Project tracking feature to see who is working on what and for how long.</p>
            <ul className= {styles.unlisted}>
                    
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Identify your computer usage habits.</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Improve your work plan & execution.</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i>  See what's causing constraints in your day.</li>
                    </ul>
            <button className= {styles.button1} >START A FREE TRAIL</button>
            <button className= {styles.DemoButton1} >BOOK A DEMO</button>
            
        </div>
        
        </div>
        <div className= {styles.DemoPage4} >
        <div>
            <h1 className= {styles.TheUltimate}  style ={{textAlign: "left"}} >DeskTime for Freelancres</h1>
            <p className = {styles.p1} >This guide explores the main features of DeskTime for freelancers and shows how to manage projects, create reports, and change the settings specific to you.</p>
            <p className = {styles.p1} >Using DeskTime is a great way to never again get underpaid for the time invested in your clients' projects.</p>
            <ul className= {styles.unlisted}>
                    
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Track time spent on specific projects.</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Use the Cost calculation and Invoicing features.</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Boost productivity to raise your income.</li>
                    </ul>
            <button className= {styles.button1} >START A FREE TRAIL</button>
            <button className= {styles.DemoButton1} >BOOK A DEMO</button>
            
        </div>
        <div  style={{box:"none"}} className= {styles.HomePage1a} >
            <img id = {styles.Image2} src="https://desktime.com/static/web/demo/yt-dt-teams.png" alt="" />
        </div>
        </div>
        <div>
            <img style ={{width: "1516px", paddingTop : "10px"}} src="https://user-images.githubusercontent.com/107903370/193411441-91e22c73-60a3-4b58-9e38-41c0aa0ed4b4.png" alt="" />
        </div>
        <div className= {styles.DemoPage4} >
        <div className= {styles.HomePage1a} >
            <img src="https://desktime.com/static/web/demo/notebook.png" alt="" />
        </div>
        <div>
            <h1 className= {styles.TheUltimate}  style ={{textAlign: "left"}} >Not convinced yet?  <br/>Check out our self-guided demo </h1>
            <p className = {styles.p1} >If you want the full scope of what you’re getting once you sign up, visit our demo account. You can try out all the features DeskTime has to offer.</p>
            <button className= {styles.button1} >DEMO ACCOUNT</button>
            
            
        </div>
        
        </div>
        <div className= {styles.HomePage8} >
            <h3 className= {styles.HomePage8h3} >Want to get the most out of your time?</h3>
            <h3 className= {styles.HomePage8h3} >Try DeskTime for free! </h3>
            <div>
            <input type="text" name="" id= {styles.input1} placeholder= "Your work email"  />
            <button className= {styles.button1} id = {styles.button4}  >START FREE TRAIL</button>
            <p className= {styles.p2} id ={styles.p6} >Try free for 14 days. No credit card required.</p>
            <p className= {styles.p2} id ={styles.p6} >By signing up, you agree to our <strong className= {styles.Strong1} style = {{color: "white"}} >terms</strong> and <strong className= {styles.Strong1}  style = {{color: "white"}} >private policy.</strong> </p>
            </div>
        </div>
    <Footer/>
    </>
}