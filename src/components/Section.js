import "./Section.css";

export default function Section(props) {
    return (
        <div className="sectionBody" >
            <h2>{props.header}</h2>
            <img src={props.image} />
            <div className="textBody">
                {props.text}
            </div>

        </div>
    )
}
