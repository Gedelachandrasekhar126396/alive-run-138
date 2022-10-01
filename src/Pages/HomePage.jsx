import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../CssFiles/HomePageDesign.module.css";


export default function HomePage(){
    return( <>
      <div> <NavBar/></div>
        <div className= {styles.HomePage} >
            <div className= {styles.HomePage1} >
        <div>
            <h1 className= {styles.TheUltimate} >The ultimate all-in-one automatic time tracker</h1>
            <p className = {styles.p1} >A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time.</p>
            <input type="text" name="" id= {styles.input1} placeholder= "Your work email"  />
            <button className= {styles.button1} >START FREE TRAIL</button>
            <p className= {styles.p2} >Try free for 14 days. No credit card required.</p>
            <p className= {styles.p2} >By signing up, you agree to our <strong className= {styles.Strong1} >terms</strong> and <strong className= {styles.Strong1} >private policy.</strong> </p>
        </div>
        <div className= {styles.HomePage1a} >
            <iframe id= {styles.video} title="promVideo" src="https://www.youtube.com/embed/sgmDvqlSMF4?playlist=sgmDvqlSMF4&autoplay=1&mute=1&loop=1&enablejsapi=1&origin=https%3A%2F%2Fdesktime.com" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0"></iframe>
        </div>
        </div>
        <div className= {styles.HomePage2} >
            <img padding = "20px" src="https://desktime.com/static/web/clients/customer-sixt-logo-white.svg" alt="sixtImage" />
            <img src="https://desktime.com/static/web/clients/customer-mapon-logo-white.svg" alt="moppoImage" />
            <img src="https://desktime.com/static/web/clients/customer-montway-logo-white.svg" alt="montwayImage" />
            <img src="https://desktime.com/static/web/clients/customer-onthemap-logo-white.svg" alt="onthemapImage" />
            <img src="https://desktime.com/static/web/clients/customer-printful-logo-white.svg" alt="printfulImage" />
        </div>
        <div className= {styles.HomePage3} >
            <div className= {styles.HomePage3a} >
            <h1 className= {styles.HomePage3aH1} >Use time tracking software to boost productivity by 30%</h1>
            <p className = {styles.p1} >A time tracker and workforce management system that will help you develop a high-performing team that smashes goals every time.</p>
            <div className= {styles.HomePage3ab} >
                <div>
                    <h3 className= {styles.HomePage3abh3} > <i id = {styles.ABC}  className= {styles.starIcon} class="fa-solid fa-star"></i> Skyrocket effectiveness</h3>
                    <p className= {styles.p3} >Know who's doing what and how it's going all the while eliminating distractions.</p>
                </div>
                <div>
                    <h3 className= {styles.HomePage3abh3} > <i id = {styles.ABC} class="fa-solid fa-shield"></i> Minimize business losses</h3>
                    <p className= {styles.p3} >Get precise insights into projects to determine profitability and allocate resources.</p>
                </div>
            </div>
            <div className= {styles.HomePage3ab} >
                <div>
                    <h3 className= {styles.HomePage3abh3} > <i id = {styles.ABC} class="fa-solid fa-clock"></i> Automate team management</h3>
                    <p className= {styles.p3} >Organize shifts, absences, and booking-related questions all in one place.</p>
                </div>
                <div>
                    <h3 className= {styles.HomePage3abh3} > <i id = {styles.ABC} class="fa-solid fa-briefcase"></i> Minimize business losses</h3>
                    <p className= {styles.p3} >Get precise insights into projects to determine profitability and allocate resources.</p>
                </div>
            </div>
            </div>
            <div className= {styles.HomePage3b} >
                <img src="https://desktime.com/static/web/new-homepage/boost-productivity/boost-productivity.webp" alt="" />
            </div>
        </div></div>
        <div className= {styles.HomePage4} >
            <h1 className= {styles.HomePage4a} >A universal platform for running anything from businesses to large enterprises</h1>
            <p className= {styles.p4} >From a powerful time tracker to project management, human resource planning, and running an office. Everything is fully customizable and can be turned on and off for the whole company or specific users.</p>
            <div className= {styles.HomePage4b} >
                <div>
                    <div>
                    <h2 className= {styles.H2} > <i id = {styles.ABC} className= {styles.starIcon} class="fa-solid fa-star"></i> No more manual time trackers</h2>
                    <p className= {styles.p3} >Fully automatic start and end times, no manual entry, and no human error – the <strong className= {styles.Strong2}>automatic time tracker</strong>   starts up as soon as you open the computer and stops when you close it.</p>
                    </div>
                    <div>
                    <h2 className= {styles.H2} > <i  className= {styles.starIcon} id = {styles.ABC} class="fa-solid fa-star"></i> Oversee work progress</h2>
                    <p className= {styles.p3} >With<strong className= {styles.Strong2}>URL and document title tracking</strong> it's easy to always be informed about your team's overall progress and habits during work hours.</p>
                    </div>
                    <div>
                    <h2 className= {styles.H2} > <i className= {styles.starIcon} id = {styles.ABC} class="fa-solid fa-briefcase"></i> No more manual time trackers</h2>
                    <p className= {styles.p3} >Estimate project costs, assign hourly rates, issue invoices, and control expenses. <strong className= {styles.Strong2}>Project management</strong>    is easy when you have a birdseye view of all ongoing processes.</p>
                    </div>
                    <div>
                    <h2 className= {styles.H2} > <i className= {styles.starIcon} id = {styles.ABC} class="fa-solid fa-briefcase"></i> Run your office smoothly</h2>
                    <p className= {styles.p3} >DeskTime isn't just a time tracker. You can assign <strong className= {styles.Strong2}>shifts</strong> and oversee  <strong className= {styles.Strong2}>absence</strong>, stay informed about remote workers and run a hybrid office all on one platform.</p>
                    </div>

                </div>
                <div>
                    <div >
                        <div className= {styles.Image2} ><img src="https://desktime.com/static/web/new-homepage/universal-platform/universal-platform.webp" alt="" /></div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className= {styles.buttonsGrid} >
        <div className= {styles.certainButtons} >
    
    <button className= {styles.Buttons} > <strong>Automatic time tracking</strong> </button>
    <button className= {styles.Buttons} > <strong>Offline time tracking</strong> </button>
    <button className= {styles.Buttons} > <strong>Document time tracking</strong> </button>
    <button className= {styles.Buttons} > <strong>Private time option</strong> </button>
    <button className= {styles.Buttons} > <strong>Invoicing</strong> </button>
    </div>
    <div className= {styles.certainButtons} >

    <button className= {styles.Buttons} > <strong>Pomodoro timer</strong> </button>
    <button className= {styles.Buttons} > <strong>Cost calculation</strong> </button>
    <button className= {styles.Buttons} > <strong>Team's contacts</strong> </button>
    <button className= {styles.Buttons} > <strong>Custom reports</strong> </button>
    <button className= {styles.Buttons} > <strong>Absence calendar</strong> </button>
    </div>
    <div className= {styles.certainButtons} >

    <button className= {styles.Buttons} > <strong>Web time tracker</strong> </button>
    <button className= {styles.Buttons} > <strong>Third-party Integrations</strong> </button>
    <button className= {styles.Buttons} > <strong>Shift Scheduling</strong> </button>
    <button className= {styles.Buttons} > <strong>Mobile app</strong> </button>
    <button className= {styles.Buttons} > <strong>URL & App  tracking</strong> </button>
    </div>
    <div className= {styles.certainButtons2} >

    <button className= {styles.Buttons} > <strong>Screen shots</strong> </button>
    <button className= {styles.Buttons} > <strong>Project tracking</strong> </button>
    <button className= {styles.Buttons} > <strong>Booking</strong> </button>
    
    </div>
    <div className= {styles.Buttons3} >
        <button className= {styles.Buttons2} >SEE ALL FEATURES</button>
    </div>
        </div>
        <div className= {styles.HomePage5} >
            <div  className= {styles.Image2} >
                <img src="https://desktime.com/static/web/new-homepage/seamless-workflow/seamless-workflow.webp" alt="" />
            </div>
            <div>
                <h1 className = {styles.HomePage5H1} >A seamless workflow and healthy work-life balance for every employee</h1>
                <div>
                    <h2 className= {styles.H2}> <i className= {styles.starIcon} id = {styles.ABC} class="fa-solid fa-briefcase"></i> Flexible schedule</h2>
                    <p className= {styles.p3} >Time tracking is proof-of-work and DeskTime's time tracker gives you just that – you can plan your schedule independently, while your manager can simply follow your progress no matter where you are and when you choose to work.</p>
                    </div>
                    <div>
                    <h2 className= {styles.H2}> <i className= {styles.starIcon} id = {styles.ABC} class="fa-solid fa-briefcase"></i> Regular break reminders</h2>
                    <p className= {styles.p3} >Our time tracker uses the  <strong className= {styles.Strong2}>Pomodoro timer</strong> that will keep a cautious eye on your workload and remind you to take regular breaks so you don't lose focus all the while maintaining healthy habits and mental well-being.</p>
                    </div>
                    <div>
                    <h2 className= {styles.H2}> <i id = {styles.ABC} className= {styles.starIcon} class="fa-solid fa-briefcase"></i> Private time</h2>
                    <p className= {styles.p3} >DeskTime's<strong className= {styles.Strong2}>Private time</strong>  feature disables the website and time tracker for when you have to take care of non-work-related tasks during office hours. Employees can feel safe knowing their privacy is protected.</p>
                    </div>
                    <div>
                    <h2 className= {styles.H2}> <i className= {styles.starIcon} id = {styles.ABC} class="fa-solid fa-briefcase"></i> No more unbilled hours</h2>
                    <p className= {styles.p3} >Employee time is pure gold when it comes to resource planning. DeskTime's time tracker even lets you add <strong className= {styles.Strong2}>time spent offline</strong>   like in meetings, brainstorms, or on work calls so no billable hours go unnoticed.</p>
                    </div>
                    <p>All the features can be turned on and off to suit eveyone's needs</p>
                    
            </div>
        </div>
        <div className= {styles.HomePage6} >
            <div className= {styles.HomePage6a} >
               <img src="https://desktime.com/static/web/new-homepage/integrations/integrations.webp" alt="" />
            </div>
            <div className= {styles.HomePage6b}>
                <h1 className = {styles.HomePage5H1} >Integrations with popular work tools</h1>
                    <p className= {styles.p3}>From calendar apps to help you track offline time, to project management software to make project and task tracking accurate, while effortless. DeskTime can simplify every aspect of your workflow.</p>
                    <button className= {styles.button3} >READ MORE</button>
            </div>
        </div>
        <div className= {styles.HomePage7} >
            <h1 className= {styles.HomePage7h1}> A single time tracking app for desktops and mobile phones</h1>
            <p className= {styles.p6}> Whether in the office or on the go – use DeskTime to keep track of your and your team's time.</p>
            <div className= {styles.HomePage7a} >
                 <div>
                 <img src="https://desktime.com/static/web/new-homepage/desktop/desktop.webp" alt="forDesktops" />
                    <h1 className= {styles.HomePage7ah1} >DeskTime for desktops</h1>
                    <i id = {styles.icon} class="fa-brands fa-windows"></i>
                    <i id = {styles.icon} class="fa-brands fa-apple"></i>
                    <i id = {styles.icon} class="fa-brands fa-android"></i>
                    
                    <ul className= {styles.unlisted}>
                    <h3>Requires download and installation</h3>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Fully automated time tracker</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> App URL & Document title tracking</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Project and task tracking</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Screenshots</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Idle and Private time</li>
                    </ul>
                    <button className= {styles.learnMoreButton} >Learn More</button>
                 </div>

                 <div>
                   <img src="https://desktime.com/static/web/new-homepage/mobile/mobile.webp" alt="mobilePhones" />
                    <h1 className= {styles.HomePage7ah1} >DeskTime for mobile phones</h1>
                    <i id = {styles.icon} class="fa-brands fa-apple"></i>
                    <i id = {styles.icon} class="fa-brands fa-android"></i>
                    
                    <ul className= {styles.unlisted} >
                    <h3>Requires download and installation</h3>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i>Manual time tracker</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Workday overview</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Project and task tracking</li>
                    </ul>
                    <button className= {styles.learnMoreButton} >Learn More</button>
                 </div>

                 <div>
                    <img src="https://desktime.com/static/web/new-homepage/webtimer/webtimer.webp" alt="manualTimetracking" />
                    <h1 className= {styles.HomePage7ah1} >Manual time tracking</h1>
                     <p className= {styles.p5} >Supported on all popular browsers</p>
                    
                    <ul className= {styles.unlisted}>
                    <h3>No software installation necessary</h3>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Fully automated time tracker</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> App URL & Document title reacking</li>
                 <li className = {styles.List} > <i id = {styles.DEF} class="fa-solid fa-check"></i> Project and task tracking</li>
                    </ul>
                    <button className= {styles.learnMoreButton} >Learn More</button>
                 </div>
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
        <div><Footer/></div>
        </>
    )
}