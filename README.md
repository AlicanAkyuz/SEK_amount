This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run test`

Launches the test runner in the interactive against snapshots

### Deployment

The app is currently deployed to Netlify. <br />
To view the live app, please visit: (https://sek-amount.netlify.com/)
Pushes to the master branch on GitHub would automatically be integrated to the live app.

## Project Summary

- The project has one main entry point to the app: containers/Main. I aimed retrieving and holding the relevant data in Main, and passing it as props to children. <Main> would render a loading screen while the data is being fetched, and an error message if data-fetch fails.

- http://fixer.io's free-tier subscription does not include the rates endpoint. For the purposes of this challenge, I used https://api.exchangeratesapi.io to retrieve the exchange rates for SEK. This API returns only a set exchange rate for 1 SEK. Therefore, I manually calculate the amount in the target currency. For some countries' currencies, this API unfortunately does not provide an exchange rate. In such cases, the app renders a 'not found' message.

- There are two utility functions. One slices the number (SEK amount in the target currency) so that it creates a better user experience, and the other adds dots (.) to the population number for the same purposes.

- For styling, I used Emotion's CSS-in-JS approach. All the style properties used by <Main/> and its children are in the corresponding container's directory. I used a light color palette with a light blue and a striking orange.

- The code is written in line with the linting rules described by Airbnb.

- If given more time and developing this app for production, I would:
  — seperate the logic/data of <Input> and <Dropdown> into two different containers; render those containers in <Main>; use <Main> as a wrapper for this context; and finally create a context to share logic between the containers,
  — write more comprehensive tests, particularly for the asynchronous tasks in <Main/>
  — use http://fixer.io for accessing exchange rates for more currencies
  — work with a UX designer for a better look
