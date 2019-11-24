# Scorecard Project

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment

This widget is deployed with [netlify](https://www.netlify.com/). It automatically deploys upon merging to master. You can preview the widget here: https://priceless-williams-fb7e44.netlify.com/

Netlify also makes the our static assets available a la carte, so that we can embed them in other Sunrise sites. Netlify is configured to run `npm run build:deploy` as a build script, which makes our assets available for use here:
- [JavaScript](https://priceless-williams-fb7e44.netlify.com/main.js)
- [CSS](https://priceless-williams-fb7e44.netlify.com/main.css)

To embed, add the following to your project:
```
<div id="sc-root"></div>
<script src="https://priceless-williams-fb7e44.netlify.com/runtime.js"></script>
<script src="https://priceless-williams-fb7e44.netlify.com/main.js"></script>
<script src="https://priceless-williams-fb7e44.netlify.com/2.js"></script>
<link rel="stylesheet" type="text/css" href="https://priceless-williams-fb7e44.netlify.com/main.css" />
```

## Adding Scorecard Data
The data committed to this repository is mock data and does not reflect real scores evaluated by Sunrise. To add real data, contributing members should:
- Request the scorecard spreadsheet from The Sunrise team and download it as a CSV
- Move a copy of the CSV to the root directory of this repoand name it 'data.js'
- Run `npm run parse-data`
