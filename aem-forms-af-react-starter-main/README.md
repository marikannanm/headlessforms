## AEM Forms 

Form is rendered using React Adaptive Form super component.

## Getting Started

In the project directory, you can run:

### `npm i --force`

Install all the depedency packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Form JSON
Sample Form JSON is available at [loan.form.json](/src/forms/loan-form-wizard.form.json).

## Custom Component.

### RichText

Component to render rich text provided in form json.
```
 {
    ":type": "custom:rich-text",
    "label": {
    "value": "Welcome to <b>Personal Banking</b>"
    }
}
```

### Slider

Instead of using default numeric stepper we can use slider for capturing number value and use `:type` to use component in Form JSON

**Supported Properties**

* Maximum
* Minimum
* Step 

**Example**

```
 {
    ":type": "custom:slider",
    "name": "rateOfInterest",
    "default": 8,
    "maximum": 12,
    "minimum" : 6,
    "fieldType": "number-input",
    "type": "number",
    "label": {
    "value": "Rate of Interest"
    }
}
````

## Mappings Object

A Mappings Object is a JavaScript map that maps the field types defined in the Specification to its respective React Component. The Adaptive Form Super Component uses this map to render the different components defined in the Form JSON.

To use that in your project use the following import, assuming you have added the project as a dependency in your project

```
import {mappings} from '@aemforms/af-react-components'
```

Once you have fetched the JSON for the form, the code would look like

```
import {mappings} from '@aemforms/af-react-components'
const json = {...}
<AdaptiveForm mappings={mappings} formJson={json} />
```

If you are not using React Spectrum then you might need to start your app with the React Spectrum Provider.

If you are not using Provider at your app level, you can use that with the Adaptive Form Super Component

```
import {mappings} from '@aemforms/af-react-components'
import { Provider as Spectrum3Provider, defaultTheme } from '@adobe/react-spectrum'
const json = {...}
<SpectrumProvider theme={defaultTheme}>
<AdaptiveForm mappings={mappings} formJson={json} />
</SpectrumProvider>
```
# Links
1. [Story book](https://opensource.adobe.com/aem-forms-af-runtime/storybook)
2. [JS API Docs](https://opensource.adobe.com/aem-forms-af-runtime/jsdocs)
3. [HTTP API Docs](https://opensource.adobe.com/aem-forms-af-runtime/api)
4. [Adaptive Form Runtime packages](https://www.npmjs.com/org/aemforms)
