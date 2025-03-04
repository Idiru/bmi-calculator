import "./limitation.css";

export default function Limitation({img, alt, title, text}) {
  return (
    <div className="limitation-container">
      <div className="title-container">
        <img src={img} alt={alt} />
        <span className="limitation-title">{title}</span>
      </div>
      <p>{text}</p>
    </div>
  );
}
