import "./intro.scss"
import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function Intro() {
  const [text] = useTypewriter({
    words: ["Software", "Developer", "React.Js",],
    loop: {},
    delaySpeed: 800,
    deleteSpeed: 60,
  })
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I’m</h2>
          <h1>Amr Imam</h1>
          <h3>
            Freelance <span>{text}</span>
            <Cursor />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
