function aboutSection() {
    const aboutContent = document.createElement('div');
    aboutContent.innerHTML = `
    
    <div class="about-container">
        <h2>About</h2>

        <section>
            <h4>Our rich history</h4>
            <p>
                Welcome to The Fudd Burgers, Birmingham's premier destination for mouthwatering gourmet burgers! Located in the heart of Alabama, The Fudd Burgers prides itself on crafting the juiciest, most flavorful burgers using only the freshest, locally-sourced ingredients. Our diverse menu offers a delicious array of options, from classic beef patties to inventive vegetarian creations, all served in a vibrant, family-friendly atmosphere. Whether you're a burger enthusiast or simply looking for a great place to dine with friends, The Fudd Burgers promises a memorable culinary experience with every bite. Join us today and taste the difference!
            </p>
        </section>
        <div class="questionaire">
            <div class="question-one">
                <p><b>
                    What makes the burgers at The Fudd Burgers special compared to other burger joints?
                </b></p>
                <p>
                    At The Fudd Burgers, our burgers stand out because we use only the freshest, locally-sourced ingredients, including
                    premium quality beef and artisanal buns. Our culinary team crafts each burger with care, ensuring a perfect balance of
                    flavors and textures. Additionally, we offer a variety of unique toppings and house-made sauces that you won't find
                    anywhere else, making every burger a one-of-a-kind experience.
                </p>
            </div>
            <div class="question-two">
                <p><b>
                    Are there any special deals or events that I should know about?
                </b></p>
                <p>
                    Yes, we love to treat our customers with special deals and events! We have weekly specials, including discounts on
                    certain burgers and combo meals. Additionally, we host fun events like trivia nights, live music, and burger-eating
                    contests. Be sure to follow us on social media and check our website regularly to stay updated on all the latest
                    promotions and happenings at The Fudd Burgers.
                </p>
            </div>
        </div>
    </div>

    `;

    return aboutContent;
}

export { aboutSection };