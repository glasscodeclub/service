const userID = "user_LdXdsu9IgagPOhAp3sN1b";
const serviceID = "service_34h2nhn";
const templateID = "template_ulxkhhy";
emailjs.init(userID);


let form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMail();
})


const sendMail = () => {    
    let name = form.name.value;
    let email = form.email.value;
    let subject = form.subject.value;
    let message = form.message.value;


    var templateParams = {
        name,
        email,
        subject,
        message
    }
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           form.name.value = '';
           form.email.value = '';
           form.subject.value = '';
           form.message.value = '';
           $('#form-status').addClass('success');
           $('#form-status').text('Your query has been sent successfully!');
        }, function(error) {
           console.log('FAILED...', error);
           $('#form-status').addClass('error');
           $('#form-status').text('Error while sending the email!');
        });
}