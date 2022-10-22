import os                 # os is used to get environment variables IP & PORT
import secrets
from flask import session
from flask import Flask   # Flask is the web app that we will customize
from flask import render_template, redirect, url_for, request


app = Flask(__name__)     # create an app
app.secret_key = "htx0293klp005007dslzew"

# @app.route is a decorator. It gives the function "index" special powers.
# In this case it makes it so anyone going to "your-url/" makes this function
# get called. What it returns is what is shown as the web page


@app.route('/')
@app.route('/home')
def Home():
    return "This is the home page"

@app.route('/login')
@app.route('/signin')
def Sign_In():
    return "this is the signin/login page"

@app.route('/signup')
@app.route('/register')
def Sign_Up():
    return "This is the signup/register page"

@app.route('/logged_in')
def landing_page():
    return f"<h1>Log In Successful<h1/>"

app.run(host=os.getenv('IP', '127.0.0.1'),port=int(os.getenv('PORT', 5000)),debug=True)