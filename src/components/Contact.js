import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import dynamic from "next/dynamic";

const Contact = () => {

  const [validator] = useState(
    new SimpleReactValidator({ className: 'errorMessage' })
  );
  const [data, setData] = useState({});
  const [isBrowser, setIsBrowser] = useState(false);
  const [forms, setForms] = useState({
    yourname: "",
    youremail: "",
    yourphonenumber: "",
    subject: "",
    message: "",
  });

   // ⭐ Change handler for all inputs
  const changeHandler = (e) => {
    setForms({
      ...forms,
      [e.target.id]: e.target.value,
    });
  };

   // ⭐ Send mail to Firebase Cloud Function
  const sendMail = async () => {
    try {
      const res = await fetch(
        "https://us-central1-diegomaquillportfolio.cloudfunctions.net/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(forms),
        }
      );
      if (!res.ok) throw new Error("Network response was not ok");
      showToastMessage();
      /*
      toast.success("Message sent successfully!", {
        position: "top-center",
      });*/
      // Clear form
      setForms({
        yourname: "",
        youremail: "",
        yourphonenumber: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("sendMail error:", err);
      toast.error("Failed to send message.", {
        position: 'top-center',
      });
    }
  };

  const showToastMessage = () => {
        toast.success('Success Notification !', {
          position: "top-center"
        })
    }
  
  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      validator.hideMessages();
      sendMail();
    } else {
      validator.showMessages();
      toast.error("Please fill all required fields.", {
         position: "top-center",
      });
    }
  };

  useEffect( () => {
    setData( fatchData("/static/info.json"));
    setIsBrowser(true);
  }, []);

  if(!isBrowser){ return null; }

  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
            <img src="/img/brushes/contact/1.png" alt="image" />
        </div>
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h2>I am just a click away from being part of your organization</h2>
            <p>Drop your information in the form below and I will contact you as soon as possible</p>
          </div>
          <div className="contact_inner">            
            <div className="fields">
              {/*<form action="/" method="post" className="contact_form" id="contact_form" autoComplete="off">*/}
              <form onSubmit={submitHandler} className="contact_form" id="contact_form" autoComplete="off">
                  <div className="input_list">
                  <ul>
                    <li>
                      <input
                        id="yourname"
                        type="text"
                        placeholder="Your Name"
                        value={forms.yourname}
                        onChange={changeHandler}
                      />
                      {validator.message("yourname", forms.yourname, "required")}
                    </li>
                    <li>
                      <input
                        id="youremail"
                        type="email"
                        placeholder="Your Email"
                        value={forms.youremail}
                        onChange={changeHandler}
                      />
                      {validator.message("youremail", forms.youremail, "required|email")}
                    </li>
                    <li>
                      <input
                        id="yourphonenumber"
                        type="text"
                        placeholder="Your Phone"
                        value={forms.yourphonenumber}
                        onChange={changeHandler}
                      />
                      {validator.message("yourphonenumber", forms.yourphonenumber, "required")}
                    </li>
                    <li>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        value={forms.subject}
                        onChange={changeHandler}
                      />
                      {validator.message("subject", forms.subject, "required")}
                    </li>
                  </ul>
                </div>
                <div className="message_area">
                  <textarea
                    id="message"
                    placeholder="Write your message here"
                    value={forms.message}
                    onChange={changeHandler}
                  />
                  {validator.message("message", forms.message, "required")}
                </div>
                  {/*<div className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."/>*/}
                  <div className="dizme_tm_button">
                    {/*<a id="send_message" href="#">*/}
                      <button type="submit" id="send_message">Submit Now</button>
                    {/*</a>*/}
                  </div>              
              {/*{data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}*/}
            </form>
          </div>
          <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
                  <img src="/img/brushes/contact/2.png" alt="image" />
          </div>
        </div>                       
        </div>          
          {/*<div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height={375}
                  style={{ width: "100%" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                <br />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          {/*</div>*/}
        </div>        
      </div>
  );
};
//export default Contact;
export default dynamic (()=> Promise.resolve(Contact), {ssr : false});
