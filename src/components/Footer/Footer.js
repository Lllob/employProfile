import { useState, useEffect } from "react";

const Footer = () => {
    const [second, setSecond] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0.0)

useEffect(() => {
  setTimeout(() => {
    if (second < 59) {
       setSecond(second+1)
    } else {
        setSecond(0)
        setMinutes(minutes +1)
    }

    if (minutes === 59) {
        setMinutes(0) 
        setHours(hours +1)
    }

    if (hours === 23) {
        setHours(0)
    }

}, 1000); 
}, [hours, minutes, second])

return (
  <div className="footer">
    <p className="time">
      Time: {hours <10 ? <span>0{hours}</span>: <span>{hours}</span>}
      :{minutes <10 ? <span>0{minutes}</span>: <span>{minutes}</span>}
      :{second <10 ? <span>0{second}</span>: <span>{second}</span>}
    </p>
  </div>
)

}

export default Footer;