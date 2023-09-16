const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          // data-text="Contact Us"
          data-align="center"
        >
          Contact Us
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                  Become a vital part of our AI exploration at Twisting with
                  AI and contribute to the ever-expanding world of artificial
                  intelligence knowledge. By subscribing, you&apos;ll not only gain
                  access to captivating insights and the latest AI developments
                  but also become an active collaborator in our journey. We
                  invite you to share your AI-related articles, ideas, and
                  expertise with us.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:+770221770505">+91 9876543210</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a href="mailto:frenifyteam@gmail.com">twai@gmail.com</a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>Banaras, India</h3>
              </div>
            </li>
          </ul>
        </div>

        <div className="fn_cs_contact_form">
          <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input id="name" type="text" placeholder="Your Name *" />
                </li>
                <li>
                  <input id="email" type="text" placeholder="Your Email *" />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    defaultValue={""}
                  />
                </li>
                <li className="full">
                  <label className="fn__checkbox">
                    <input type="checkbox" />
                    <span className="fn__checkmark">
                      <img src="/svg/checked.svg" alt="" className="fn__svg" />
                    </span>
                    <p>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </p>
                  </label>
                  <div className="mw300">
                    <a
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                    >
                      <span>Send Message</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>


          <div className="fn_cs_contact_form newsletter">
            <h2>Subscribe To Newsletter</h2>
          <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input id="name" type="text" placeholder="Your Name * " required />
                </li>
                <li>
                  <input id="email" type="text" placeholder="Your Email * " required />
                </li>
                           
                <li className="full">
                  
                  <div className="mw300 "> 
                       <button className="metaportal_fn_button full " type="submit">Subscribe</button>
                  </div>

                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Thankyou for Subscribing Us! "
            />
            <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>


        
      </div>
    </section>
  );
};
export default Contact;
