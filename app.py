from flask import Flask, request, render_template, make_response, redirect, url_for
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)

# The base64 clue split into two halves
CLUE_BASE64 = "MXIwbm00bl80cm0wcl80dXRoXzV1Y2Mzc3NfTTRyazg1"
FIRST_HALF = CLUE_BASE64[:len(CLUE_BASE64)//2]  # First 22 chars
SECOND_HALF = CLUE_BASE64[len(CLUE_BASE64)//2:] # Last 22 chars

@app.route('/')
def index():
    # Delete part2 cookie if coming from dashboard
    resp = make_response(render_template('index.html'))
    resp.set_cookie('flag_part2', '', expires=0)  # Delete part2
    resp.set_cookie('flag_part1', FIRST_HALF)     # Set part1
    return resp

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username', '')
    password = request.form.get('password', '')
    
    # Simple authentication
    if username == "tony_stark" and password == "pepper_potts":
        # Set second half as cookie after login
        resp = make_response(redirect(url_for('dashboard')))
        resp.set_cookie('flag_part1', '', expires=0)  # Delete part1
        resp.set_cookie('flag_part2', SECOND_HALF)     # Set part2
        return resp
    
    return redirect(url_for('index'))

@app.route('/dashboard')
def dashboard():
    part2 = request.cookies.get('flag_part2')
    
    return render_template('dashboard.html', part2=part2)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)