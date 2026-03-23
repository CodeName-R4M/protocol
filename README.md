# Protocol

A simple web application using Flask to render an index page.

## Overview
This project serves as a basic web application that utilizes Flask to render an index page. It is a minimalistic example to demonstrate how to set up a Flask server and serve a webpage.

## Features
- Renders an index page using Flask
- Minimalistic and easy to understand

## Tech Stack / Built With
- JavaScript
- Flask

## Installation & Setup
```shell
git clone https://github.com/CodeName-R4M/protocol.git
cd protocol
pip install -r requirements.txt
python app.py
```

## Usage
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5005)
```

## Project Structure
```
protocol
|   app.py
|
|___static
|
|___templates
    |   index.html
```

## Contributing
Contributions are welcome. Feel free to open a pull request.

## License
This project is licensed under the MIT License.