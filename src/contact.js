function contactSection() {
    const contactContent = document.createElement('div');
    contactContent.innerHTML = `
    
    <div class="contact-container">
        <h2>Contact</h2>

        <p>These will be the best ways to contact us and give you a quick and accurate response.</p>

        <article id="main-office">
            <p>Main Office</p>
            <div id="contact-info">
                <a href="#">(222)493-3589</a>
                <a href="#">main-office@thefeedburger.com</a>
            </div>
        </article>

        <article id="catering">
            <p>Catering Services</p>
            <div id="contact-info">
                <a href="#">(222)192-4389</a>
                <a href="#">catering@thefeedburger.com</a>
            </div>
        </article>

        <article id="delivery">
            <p>Delivery Services</p>
            <div id="contact-info">
                <a href="#">(222)498-2397</a>
                <a href="#">delivery@thefeedburger.com</a>
            </div>
        </article>

        <article id="employment">
            <p>Employment Opportunities</p>
            <div id="contact-info">
                <a href="#">(222)971-0138</a>
                <a href="#">employment-opportunity@thefeedburger.com</a>
            </div>
        </article>
    </div>

    `;
    
    return contactContent;
}

export { contactSection };