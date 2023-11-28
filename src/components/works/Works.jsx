import { useState } from "react"
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "AUTOWATS",
      desc: "Communicate with your customers quickly, easily and at thelowest costs Save time and effort sending WhatsApp messagesthrough group messages and API connecting .",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      projectLink: "https://template-5.vercel.app/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "MUMMY",
      desc: "website specialized in teaching positive parenting to mothers under the guidanceof specialists in education.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      projectLink: "https://mummy-nine.vercel.app/",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "TICKET",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      projectLink: "https://ticket-kohl.vercel.app/",
    },
  ]

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    console.log("clicked")
  }
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          // eslint-disable-next-line react/jsx-key
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="container-left">
                  <div className="container-img">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.projectLink} target="_blank" rel="noreferrer">
                    <span>Project</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  )
}
