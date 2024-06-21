# Translate on wp.org Chrome Extension

This Chrome extension adds a context menu item that allows users to translate selected text using `translate.wordpress.org`. The user can set their preferred language code via an options page.

## Features
- Adds a context menu item for translating selected text.
- Opens a new tab with the translation URL including the selected text.
- Allows users to set their preferred language code in the options page.

## Installation

### Prerequisites
- Google Chrome browser

### Steps

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/translate-extension.git
    cd translate-extension
    ```

2. **Load the Extension in Chrome**
    1. Open Chrome and go to `chrome://extensions/`.
    2. Enable "Developer mode" by toggling the switch in the top right corner.
    3. Click on "Load unpacked" and select the directory where you cloned the repository (`translate-extension`).

3. **Set Your Preferred Language**
    1. Open the extension options by clicking on the extension icon and selecting "Options" or by going to `chrome://extensions/` and clicking "Details" -> "Extension options".
    2. Enter your preferred language code and click "Save".

## Usage
1. Go to any webpage.
2. Select some text.
3. Right-click and choose "Translate on wp.org".
4. A new tab will open with the translation URL, including the selected text and your preferred language code.


## License
This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to submit issues or pull requests if you have any suggestions or improvements.

## Acknowledgments
- Thanks to the Chrome Extensions documentation and community for guidance.
