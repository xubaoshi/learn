from flask import Flask, render_template
from function import search4letters
app = Flask(__name__)


@app.route('/')
def hello() -> str:
    return 'Hello world from Flask!'


@app.route('/search')
def do_search() -> str:
    return str(search4letters('life,the universe,and everything', 'aeiou'))


@app.route('/entry')
def entry_page() -> 'html':
    return render_template('entry.html',the_title='Welcome to search4letters on the web!')

@app.route('/searhc4',methods=['POST'])
def 


app.run(debug=True)
