# CUIMS login by Rizul

![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

CUIMS login by Rizul is a Chrome extension that enables automatic login to your UIMS (University Institute of Engineering and Technology, Chandigarh University) account. This extension securely remembers your ID and password, eliminating the need for manual entry each time.

> ⚠️ **Disclaimer: This project is for educational purposes only and should not be used to bypass captchas or violate any terms of service.**

## Features

- 🔐 Automatic login to UIMS with saved credentials
- 🖥️ Client-side operation for enhanced security
- 🔓 Captcha resolution using the powerful `tesseract.js` library

## Installation

You can check the extension in Chrome Web Store [here](https://chrome.google.com/webstore/detail/cuims-login-by-rizul/cilocidkljcochcbmmekcggakdmmibdc?hl=en-GB&authuser=0).

## Usage

1. Visit the UIMS website: [https://uims.cuchd.in/uims](https://uims.cuchd.in/uims) and open the extension.
2. Enter your UID and password in the extension. It will be securely saved for future use 😉.
3. Click on "Submit" to initiate the login process.

> Note: The extension utilizes the powerful `Tesseract.js` library to automatically solve captchas during the login process.

**Important:** In case you encounter the error message "Error: invalid captcha," please be patient as the extension will automatically retry the login process.

⚠️ **Warning:** If you provide an incorrect password, the extension may fall into an infinite loop. In such cases, please close the current UIMS tab and start again.

## Contributing

Thank you for considering contributing to CUIMS login by Rizul! Contributions and suggestions are welcome. To contribute to the project, please follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature/bug fix: `git checkout -b feature/your-feature` or `git checkout -b bugfix/your-bug-fix`.
3. Make your changes and test them thoroughly.
4. Commit your changes with descriptive commit messages: `git commit -m "Add feature/fix bug"`
5. Push your changes to your forked repository: `git push origin feature/your-feature` or `git push origin bugfix/your-bug-fix`.
6. Open a pull request to the main repository, describing your changes in detail.

Please ensure that your contributions adhere to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
