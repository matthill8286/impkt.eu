class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.nameInput = this.form.querySelector('#name');
        this.emailInput = this.form.querySelector('#email');
        this.messageInput = this.form.querySelector('#message');
        this.errorMessage = this.form.querySelector('#error-message');
        this.successMessage = this.form.querySelector('#success-message');
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const message = this.messageInput.value;

        if (this.validateForm(name, email, message)) {
            this.sendEmail(name, email, message);
        }
    }

    validateForm(name, email, message) {
        if (!name || !email || !message) {
            this.errorMessage.textContent = 'All fields are required.';
            return false;
        }
        if (!this.validateEmail(email)) {
            this.errorMessage.textContent = 'Please enter a valid email address.';
            return false;
        }
        this.errorMessage.textContent = '';
        return true;
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    sendEmail(name, email, message) {
        // Use EmailJS or another email service API to send the email
        emailjs.send('service_iqx2a1v', 'template_93si7gb', {
            from_name: name,
            from_email: email,
            message: message
        }).then((response) => {
            this.successMessage.textContent = 'Message sent successfully!';
            this.clearForm();
        }, (error) => {
            this.errorMessage.textContent = `Failed to send message due to ${error.message}. Please try again later.`;
        });
    }

    clearForm() {
        this.nameInput.value = '';
        this.emailInput.value = '';
        this.messageInput.value = '';
    }
}