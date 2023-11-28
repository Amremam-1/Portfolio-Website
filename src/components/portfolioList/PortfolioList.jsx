import "./PortfolioList.scss"

// eslint-disable-next-line react/prop-types
export default function PortfolioList({ id, title, active, setSelectedItem }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelectedItem(id)}
    >
      {title}
    </li>
  )
}
