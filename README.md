# Precious Metals Tracker

This project is a simple web application that allows you to track the current value of your gold and silver holdings by fetching live prices from the VBCE website. The application is built using HTML, JavaScript, and Tailwind CSS.

## Features

- **Live Price Fetching:** Automatically fetches the latest prices for various gold and silver items from the VBCE website.
- **Value Calculation:** Calculates the total value of your gold and silver holdings based on the current market prices.
- **Responsive Design:** Built with Tailwind CSS to ensure the application looks great on all devices.

## Technologies Used

- **HTML**
- **JavaScript**
- **Tailwind CSS**
- **CORS Proxy** for handling cross-origin requests

## Getting Started

### Prerequisites

To run this project locally, you need a basic understanding of HTML, JavaScript, and Tailwind CSS.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gabriel-dalton/precious-metals-tracker.git
   cd precious-metals-tracker
   ```

2. **Open the `index.html` File:**

   You can directly open the `index.html` file in your web browser to start using the application.

### Usage

1. **Enter Your Holdings:**
   - Input the number of gold and silver bars or coins you hold in the corresponding fields.

2. **Calculate Value:**
   - Click the "Calculate Value" button to fetch the latest prices and calculate the total value of your holdings.

3. **View Results:**
   - The application will display the current value of your gold and silver holdings in CAD.

### Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `app.js`: The JavaScript file responsible for fetching prices, calculating values, and updating the DOM.
- `README.md`: This file, providing an overview of the project and instructions on how to use it.

### Known Issues

- **CORS Policy:** The VBCE website may block direct requests due to CORS. This project uses a free CORS proxy service (`corsproxy.io`) to bypass this issue. If the proxy is down or rate-limited, fetching prices might fail.
- **Parsing Errors:** If the VBCE website updates its structure, the price parsing may break, requiring updates to the CSS selectors.

### Future Improvements

- **Custom Proxy Server:** Set up a dedicated proxy server to handle CORS issues more reliably.
- **Enhanced Error Handling:** Improve the error handling to provide more user-friendly messages.
- **Additional Features:** Add support for more precious metals and additional currency options.

## Contributing

Feel free to submit issues and pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
