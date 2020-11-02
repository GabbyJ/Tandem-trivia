Live site [hosted on Netlify](https://tandem-trivia-gj.netlify.app). Built with React and CSS.

My mockup for the challenge can be found [here via Canva](https://www.canva.com/design/DAEL2zwXYGA/lP7jngFlXWw3_drbHe_Rtw/view?website#4). The design is based off of [Tandem's website](https://madeintandem.com).

## Project Description

Your goal is to create an application that others will be able to use in order to help improve their trivia skills.

Create an application that displays trivia questions with multiple-choice answers to select from. At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. Feel free to use whatever framework or language you are comfortable with.


### AC

- [X] A user can view questions.
- [X] Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
- [X] A user can select only 1 answer out of the 4 possible answers.
- [X] The correct answer must be revealed after a user has submitted their answer
- [X] A user can see the score they received at the end of the round<br/>
**Bonus**
- [ ] Add unit tests


### Assumptions

<ul>
    <li>A round of trivia has 10 Questions</li>
    <li>All questions are multiple-choice questions</li>
    <li>Your score does not need to update in real time</li>
    <li>Results can update on form submit, button click, or any interaction you choose</li>
    <li>We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.</li>
</ul>

## Dependencies Used
- React Icons


## How to Run

Can be viewed [here on Netlify](https://tandem-trivia-gj.netlify.app).

**To Run Locally:**
- Clone the repo using `git clone https://github.com/GabbyJ/Tandem-trivia.git`
- Install dependencies with `npm install`
- Start server with `npm start`

**Issues to watch for**
- If you get all the answers wrong on a Restarted game (not refresh), the zero(0) score will show blank.
    - I wasn't able to figure out why this was happening in time for the deadline, but I'm still working on it.
    - I also figured, not many people are going to get everything wrong on a 2nd try, so it won't be very noticeable.

## Potential new features to make it better:
- Create a dark mode

## 

<details>
    <summary>Getting Started with Create React App</summary>

    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    ## Available Scripts

    In the project directory, you can run:

    ### `npm start`

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.\
    You will also see any lint errors in the console.

    ### `npm test`

    Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    ### `npm run build`

    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

    ### `npm run eject`

    **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

    ## Learn More

    You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

    To learn React, check out the [React documentation](https://reactjs.org/).

    ### Code Splitting

    This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

    ### Analyzing the Bundle Size

    This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

    ### Making a Progressive Web App

    This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

    ### Advanced Configuration

    This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

    ### Deployment

    This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

    ### `npm run build` fails to minify

    This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>