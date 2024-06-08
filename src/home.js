function homePage() {
    const homeContent = document.createElement('div');
    homeContent.innerHTML = `
    
    <div class="home-container">

        <h3 class="heading">Best burgers in town!</h3>

        <div class="quotes">
            <p class="quote-heading">Hear from our customers!</p>
            <div class="articles">
                <article class="quote quote-one">
                    <h4>George Looney</h4>
                    <p class="customer-quote">"The experience the first I came to this restaurant was incredible, I not only became a regular at this restaurant, I spreaded the word around town!"</p>
                </article>
            <article class="quote quote-two">
                    <h4>Patricia Wilkins</h4>
                    <p class="customer-quote">"I don't know what they do, but these burgers have been such a huge reminder of home. These burgers have great taste and the atmosphere   when you come to the restaurant makes you feel at home."</p>
                </article>
            </div>
        </div>
        <div class="hours">
            <h3 class='business-hours'>Hours</h3>
            <div class="times">
                <div class="time time-one">
                    <div id="day">Sunday - Thursday</div>
                    <div id="time">11am - 7pm</div>
                </div>
                <div class="time time-two">
                    <div id="day">Friday and Saturday</div>
                    <div id="time">11am - 10pm</div>
                </div>
            </div>
        </div>
    </div>

    `;

    return homeContent;
}

export { homePage };