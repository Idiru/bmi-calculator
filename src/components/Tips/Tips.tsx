import "./tips.css"
interface TipsProps {
  img: string;
  alt: string;
  title: string;
  text: string;
}


export default function Tips({img, alt, title, text}: TipsProps) {
  return (
    <div className="tip-container">
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}
