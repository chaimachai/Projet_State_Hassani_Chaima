import "./Thank.sass"
import thank from "../../assets/img/thankyou.svg"

export default function Thank({data}){
    return (
        <div className='finished'>
            <img src={thank} alt="thank you" />
            <h1>{data.title.title}</h1>
            <p>{data.title.subtitle}</p>
        </div>
    )
}