import "./TitleSection.css"

export default function TitleSection(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
        </div>
    )
}