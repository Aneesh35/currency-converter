### Currency Converter Readme

This Currency Converter is a simple web application built using HTML, CSS, and JavaScript. It allows users to convert currencies based on the latest exchange rates fetched from an external API. Below is a breakdown of the files and functionalities:

#### Files Included:
1. **index.html**: This file contains the structure of the currency converter application. It includes HTML elements such as forms, input fields, dropdowns, and buttons required for user interaction.
2. **style.css**: This file contains the styles for the HTML elements. It defines the layout, colors, and responsiveness of the currency converter application.
3. **codes.js**: This JavaScript file contains the country codes necessary for fetching the flag images and currency conversion rates.
4. **cur.js**: This JavaScript file handles the functionality of fetching exchange rates, updating the UI with the latest rates, and converting currencies.

#### Features:
- **Currency Conversion**: Users can enter an amount and select the currencies they want to convert from and to.
- **Dynamic Flag Display**: The flag images of the selected currencies are displayed dynamically.
- **Real-time Exchange Rates**: Exchange rates are fetched from an external API to provide users with the latest conversion rates.
- **Responsive Design**: The application is designed to be responsive and work well on different screen sizes.

#### Usage:
1. Open the `index.html` file in a web browser.
2. Enter the amount you want to convert.
3. Select the currency you want to convert from and to.
4. Click on the "GET EXCHANGE RATE" button to see the converted amount.

#### Dependencies:
- **Font Awesome**: The application uses Font Awesome for the exchange icon (`fas fa-exchange-alt`).
- **Flags API**: Flag images are fetched from the Flags API based on the country codes.

#### How to Customize:
- To modify the design or layout, you can edit the styles in the `style.css` file.
- To add more currencies or change existing ones, you can update the country codes and currency conversion logic in the `codes.js` and `cur.js` files.
