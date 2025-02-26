import "./tips.css"

export default function Tips({img, alt, title, text}) {
  return (
    <div className="tip-container">
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}
