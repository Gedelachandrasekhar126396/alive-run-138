import styles from "../CssFiles/NavbarDesign.module.css";


export default function Footer(){
    return<>
    <div className= {styles.Footer} >
        <div >
            <ul>
                <li className= {styles.firstElementinLIst}  >Company</li>
                <li>Home</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Affliate terms</li>
                <li>Download app</li>
                <li>Pricing</li>
                <li>Affliate</li>
                <li>Press</li>
                <li>DeskTime in your language</li>
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst} >Learn more</li>
                <li>All resources</li>
                <li>Employee monitoring guide</li>
                <li>Online employee time clock</li>
                <li>Best time tracking apps</li>
                <li>DeskTime for business</li>
                <li>DeskTime for freelancers</li>
                <li>FAQ</li>
                <li>Case studies</li>
                <li>Webinars</li>
                <li>Blog</li>
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst} >Integrations</li>
                <li>All integrations</li>
                <li>Trello</li>
                <li>Basecamp</li>
                <li>Jira</li>
                <li>Asana</li>
                <li>Outlook Calendar app</li>
                <li>Google Calendar</li>
                <li>Affliate</li>
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst}  >Features</li>
                <li>All features</li>
                <li>Automatic time tracking</li>
                <li>URL & App tracking</li>
                <li>Screenshots</li>
                <li> Project time tracking</li>
                <li>Shift  schedule</li>
                <li>Offline time tracking</li>
                <li>Invoicing</li>
                <li>Absence calendar</li>
            
            </ul>
        </div>
        <div >
            <ul>
                <li className= {styles.firstElementinLIst}  >Help center</li>
                <li>Contact us</li>
                <li>Schedule a call</li>
                <li>Send us an e-mail</li>
                <li>Request In-person training</li>
                <li>Open chat</li>
                <li className= {styles.firstElementinLIst} >Phone support app</li>
                <li>USA: +1(315) 6365354</li>
                <li>EU: +371 27337268</li>
                
            </ul>
        </div>
    </div>
    <div className= {styles.footBottom} >
        <div className= {styles.footBottomTop}>
    <div >
        <img className= {styles.TitleLogo} alt = "errorLoading"  src = "https://static.crozdesk.com/web_app_library/providers/logos/000/006/967/original/desktime-1643207163-logo.png?1643207163" />
      <strong className= {styles.Title} >DeskTime</strong>
       </div>
       <div>
    <img width= "150px" src="https://www.kindpng.com/picc/m/483-4830469_google-get-it-on-play-store-hd-png.png" alt="playStore" />
    <img className= {styles.appleApp} width="130px" src="https://www.nicepng.com/png/detail/235-2356693_-appstore-apple-app-store-download-png.png" alt="applestore" />
       </div>
       </div>
    <div className= {styles.footBottomTop} >
        <div className= {styles.iconsList} >
        <i id = {styles.icons}   class="fa-brands fa-square-facebook"></i>
    <i id = {styles.icons} class="fa-brands fa-twitter"></i>
    <i id = {styles.icons} class="fa-brands fa-youtube"></i>
    <i id = {styles.icons} class="fa-brands fa-linkedin"></i>
    <i id = {styles.icons}  class="fa-brands fa-skype"></i>
    <i id = {styles.icons} class="fa-brands fa-whatsapp"></i>
        </div>
        <div>
            <span>Subscribe to our newsletters</span>
            <input id = {styles.footerInputBox} placeholder="Type in your email" />
            <button id = {styles.footerButton} >SUBSCRIBE</button>
        </div>
    </div>
       

    </div>
    
    </>
}