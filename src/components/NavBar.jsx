import styles from "../CssFiles/NavbarDesign.module.css"
export default function NavBar(){
    return <>
       <div className= {styles.NavBar} >
       <div className= {styles.NavLeft}>
        <img className= {styles.TitleLogo} alt = "errorLoading"  src = "https://static.crozdesk.com/web_app_library/providers/logos/000/006/967/original/desktime-1643207163-logo.png?1643207163" />
      <strong className= {styles.Title} >DeskTime</strong>
       </div>
       <div className= {styles.NavRight} > 
        <h3 className= {styles.diffPages} >Demo</h3>
        <h3 className= {styles.diffPages} >Features</h3>
        <h3 className= {styles.diffPages} >Pricing</h3>
        <h3 className= {styles.diffPages} >About us</h3>
        <h3 className= {styles.diffPages} >FAQ</h3>
        <h3 className= {styles.diffPages} >Blog</h3>
        </div>
        
        <div className= {styles.NavbarButtons} >
        <button className = {styles.LoginButton} >LOGIN</button>
        <button className = {styles.SignupButton} >SIGN UP</button>
        </div>

       </div>
    </>
} 


























