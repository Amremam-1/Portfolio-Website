import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useEffect, useState } from "react"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../data"

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState("featured")
  const [data, setData] = useState([])

  useEffect(() => {
    switch (selectedItem) {
      case "featured":
        setData(featuredPortfolio)
        break
      case "web":
        setData(webPortfolio)
        break
      case "mobile":
        setData(mobilePortfolio)
        break
      case "design":
        setData(designPortfolio)
        break
      case "content":
        setData(contentPortfolio)
        break
      default:
        setData(featuredPortfolio)
    }
  }, [selectedItem])
  const List = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "desgin",
      title: "Desgin",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ]

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {List.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <PortfolioList
            title={item.title}
            active={selectedItem === item.id}
            setSelectedItem={setSelectedItem}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          // eslint-disable-next-line react/jsx-key
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
