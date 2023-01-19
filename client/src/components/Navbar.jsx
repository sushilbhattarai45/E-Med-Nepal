import React from "react"
import styles from "../css/components/Navbar.module.css"
const Navbar = () => {
  return (
    <>
    <div className={styles.nav_con}>
       <div className={styles.left}>
        <span className={styles.logo}></span>
        <p className={styles.logo_name}>Logo</p>
       </div>
       {/* <div className={styles.right}>
        <div className={styles.login_btn}>
          <p>Login</p>
        </div>
       </div> */}
    </div>
    </>
  )
}

export default Navbar