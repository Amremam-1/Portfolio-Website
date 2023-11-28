import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material"

// eslint-disable-next-line react/prop-types
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+20 115 908 4460</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>emama2337@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="humburgar" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
