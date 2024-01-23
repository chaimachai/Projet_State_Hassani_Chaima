import "./Thank.sass"
import thank from "../../assets/img/thankyou.svg"

export default function Thank(){
    return (
        <div className='finished'>
            <img src={thank} alt="thank you" />
            <h1>Thank You !</h1>
            <p>Thanks for confirming your subscriptions! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
            </p>
        </div>
    )
}