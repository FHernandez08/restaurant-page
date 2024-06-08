const content = document.getElementById('#content');

function about() {
    const pageContent = document.createElement('div');
    pageContent.setAttribute('id', 'page-content');

    const container = document.createElement('div');
    container.classList.add('container');

    const heading = document.createElement('h1');
    heading.classList.add('about-heading');
    heading.textContent = 'About the Fudd Burgers';

    const body = doucment.createElement('div');
    body.classList.add('body');

    const groupingOne = document.createElement('div');
    groupingOne.classList.add('grouping-one');

    const questionOne = document.createElement('p');
    questionOne.classList.add('question-one');
    questionOne.textContent = 'When were we created?';

    const questionOneAnswer = document.createElement('p');
    questionOneAnswer.classList.add('question-one-answer');
    questionOneAnswer.textContent = 'We were created in the 1980s by owner Jake Myers. We were founded in the outside parts of Birmingham, Alabama, serving the local families in the area.';

    groupingOne.appendChild(questionOne);
    groupingOne.appendChild(questionOneAnswer);

    const groupingTwo = document.createElement('div');
    groupingTwo.classList.add('grouping-two');

    const questionTwo = document.createElement('p');
    questionTwo.classList.add('question-two');
    questionTwo.textContent = 'What makes us so special?';

    const questionTwoAnswer = document.createElement('p');
    questionTwoAnswer.classList.add('question-two-answer');
    questionTwoAnswer.textContent = 'We are a family-owned establishment with rich history of creating great burgers that give our customers a sense of a great homemade burger. We have been around for quite a while, leaving a mark around town as the best burger in town.'

    groupingTwo.appendChild(questionTwo);
    groupingTwo.appendChild(questionTwoAnswer);

    body.appendChild(groupingOne);
    body.appendChild(groupingTwo);

    container.appendChild(heading);
    container.appendChild(body);

    pageContent.appendChild(container);

    content.appendChild(pageContent);
}

export default about;