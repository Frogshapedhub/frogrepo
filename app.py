from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cooperation')
def cooperation():
    return render_template('cooperation.html')

@app.route('/vent', methods=['POST'])
def vent():
    messages = [
        "Life is tough sometimes.",
        "I just need to get this off my chest.",
        "Feeling overwhelmed...",
        "Anybody else having a rough day?"
    ]

    message = random.choice(messages)
    user_input = request.form.get('user_input')

    return jsonify({'message': message, 'user_input': user_input})

if __name__ == '__main__':
    app.run(debug=True)
