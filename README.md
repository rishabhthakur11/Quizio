# Quiz Application

This is a simple quiz application built using React.js and TypeScript, utilizing the Context API. The application fetches quiz questions from the [Open Trivia Database API](https://opentdb.com/api.php?amount=15) and allows users to answer them. Below, you'll find information about the application's requirements, functionality, and features.

## Objective

Thank you for considering me for the FullStack Developer Intern position at CausalFunnel. As part of the evaluation process, I have completed the task assigned to me.

## Features

### Quiz Layout & Flow

- The application starts with a welcome page where the user is prompted to submit their email address.

- After submitting the email address, the user is presented with 15 quiz questions.

- A timer is displayed at the top of the page, counting down from 30 minutes. The quiz auto-submits when the timer reaches zero.

### Navigation

- Users can navigate to a specific question within the quiz.

- An overview panel or a similar element shows all questions, indicating:
  - Questions the user has visited.
  - Questions that have been attempted.

### End of Quiz

- After completing the quiz or when the timer runs out, users are directed to a report page.

- The report page displays each question with the user's answer and the correct answer side by side or in an easily comparable format.

### Data Source

- Quiz questions are fetched from the [Open Trivia Database API](https://opentdb.com/api.php?amount=15).

- The question displayed to the user is obtained from the `question` parameter of the API response.

- Choices presented to the user for each question are generated from a concatenated array of `correct_answer` and `incorrect_answers` parameters.

- The correct answer for each question is provided in the `correct_answer` parameter.

## Challenges Faced

Building the Overview Panel and Navigation:
- One of the challenges faced during development was implementing the overview panel with question navigation. This required careful management of state and routing to ensure that users could easily move between questions.

Building the Result Panel:
- Another challenge was creating the result panel to display each question, the user's answer, and the correct answer side by side. Formatting and presenting this information in a clear and readable manner required thoughtful design and layout decisions.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to access the application.

## Technologies Used

- Next.js
- TypeScript
- Context API
- Tailwind CSS (for styling)
- Axios (for API requests)

## Acknowledgments

Special thanks to the Open Trivia Database for providing the quiz questions for this application.

## Screenshots
![Alt text](/screenshots/Screenshot%202023-09-21%20at%2010.48.29%20PM.png)
![Alt text](/screenshots/Screenshot%202023-09-21%20at%2010.49.24%20PM.png)
![Alt text](/screenshots/Screenshot%202023-09-21%20at%2010.49.51%20PM.png)
![Alt text](/screenshots/Screenshot%202023-09-21%20at%2010.50.42%20PM.png)
![Alt text](/screenshots/Screenshot%202023-09-21%20at%2010.51.05%20PM.png)