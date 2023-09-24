const poll = {
    question: 'What is your favourite programming language?',
    options: ['JavaScript', 'Python', 'Rust', 'C++'],
    replies: [0, 0, 0, 0],

    registerNewAnswer() {
        const input = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
        const selectedOption = Number(input);

        if (!isNaN(selectedOption) && selectedOption >= 1 && selectedOption <= this.options.length) {
            this.replies[selectedOption - 1]++;
        } else {
            alert('Invalid option! Please try again.');
        }

        this.displayResults();
    },

    displayResults(type = 'array') {
        //Vu Lan Tuong - 20020761
        const resultElement = document.getElementById('result');

        if (type === 'string') {
            const resultsString = `Poll results are ${this.replies.join(', ')}`;
            resultElement.textContent = resultsString;
            console.log(resultsString);
        } else {
            resultElement.textContent = `Poll results are ${this.replies}`;
            console.log(this.replies);
        }
    }
};

document.getElementById('answerPollButton').addEventListener('click', () => {
    poll.registerNewAnswer();
});