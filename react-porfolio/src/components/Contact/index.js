import React from 'react';
import emailjs from 'emailjs-com';


function Contact () {

function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm('service_xhdxkyq', 'first-email-template', e.target, 'user_NAboddAEYZwNQwPvAm3mH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text)
    });
    e.target.reset()
}

    return (
     <div>
         <div className = 'container'>
             <form onSubmit={sendEmail}>
                 <div className='row pt-5 mx auto'>
                     <input type='text' className='form-control' placeholder='Name' name='name'></input>
                 </div>
                 <div className='col-8 form-group pt-2 mx-auto'>
                     <input type='email' className='form-control' placeholder='Email Address' name='email'></input>
                 </div>
                 <div className='col-8 form-group pt-2 mx-auto'>
                    <input type='text' className='form-control' placeholder='Subject' name='subject'></input>
                 </div>
                 <div className='col-8 form-group pt-2 mx-auto'>
                     <textarea className='form-control' placeholder='Your message' name='message'></textarea>
                     </div>
                <div className='col-8 pt-3 mx-auto'>
                    <input type='submit' className = 'btn btn-primary' value='Send Message'></input>
                    </div>
             </form>
         </div>
     </div>
    );
    }
export default Contact;