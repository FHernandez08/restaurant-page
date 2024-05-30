function homePage() {
    const homeContent = document.createElement('div');
    homeContent.innerHTML = `
    
    <div class="home-container">
        <h1>The Fudd Burgers</h1>

        <h3>Best burgers in town!</h3>

        <div class="quotes">
            <article class="quote-one">
                <h4>George Looney</h4>
                <p>The experience the first I came to this restaurant was incredible, I not only became a regular at this restaurant, I spreaded the word around town!</p>
            </article>
            <article class="quote-two">
                <h4>Patricia Wilkins</h4>
                <p>I don't know what they do, but these burgers have been such a huge reminder of home. These burgers have great taste and the atmosphere   when you come to the restaurant makes you feel at home.</p>
            </article>
        </div>
        <div class="hours">
            <h3 class='business-hours'>Hours</h3>
            <div id="day">Sunday - Thursday</div><div id="time">11am - 7pm</div>
            <div id="day">Friday and Saturday</div><div id="time">11am - 10pm</div>
        </div>
    </div>

    `;

    return homeContent;
}

export { homePage };