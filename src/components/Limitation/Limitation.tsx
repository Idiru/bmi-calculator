import "./limitation.css";

interface LimitationProps {
  img: string;
  alt: string;
  title: string;
  text: string;
}

export default function Limitation({img, alt, title, text}: LimitationProps) {
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
