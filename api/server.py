from flask import Flask, request, make_response
from flask_cors import CORS, cross_origin

import smtplib

# Flask config
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

gmail_user = ''
gmail_password = ''

@app.route('/api/send_email', methods=['POST', 'GET'])
@cross_origin()
def send_email():
    to = request.form['receiver_email'] # receiver email

    sent_from = gmail_user
    subject = 'Thank you for your subcripton'
    body = "hello from the other side"

    email_text = """\
    From: %s
    To: %s
    Subject: %s

    %s
    """ % (sent_from, to, subject, body)

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(gmail_user, gmail_password)
        server.sendmail(sent_from, to, email_text)
        server.close()

        return {
            'msg' : "sent"
        }
    except:
        return {
            'msg' : "cannot send"
        }
        

if __name__ == '__main__':
    app.run(port="7200", debug=True)
