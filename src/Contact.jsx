import React from 'react'

export default function Contact() {
  return (
    <div className="contact section" id="contact" >
    <h1 >CONTACT</h1>
    
    <div className="wrapper">
        <form className="contactForm" action="https://formsubmit.co/coongames8@gmail.com" method="POST">
            <input type="hidden" name="_next" value="http://127.0.0.1:5501/thankyou.html" />
            <input type="hidden" name="_subject" value="New email" />
            <input type="text" name="_honey" style={{display: "none"}} />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="email" id="" required placeholder="example@gmail.com"/>
            <input type="text" name="username" id="" required placeholder="Name*"/>
            <input type="hidden" name="_cc" value="charleykibet254@gmail.com" />
            <input type="text" name="text" className="message" />
            <button type="submit">SUBMIT</button>
        </form>

        <div className="contactAddress">
            <p> Kkibet</p>
            <p>431 University way, Floor 2</p>
            <p>Nairobi NY 10013</p>
            <p>Kenya</p>
            <p>tel: <a href="tel:+254 797814027" title='+254 797814027'>+254 797814027</a></p>
            <p>mail: <a href="mailto:coongames8@gmail.com" target='_blank'>coongames8@gmail.com</a></p>
        </div>
    </div>

</div>
  )
}
