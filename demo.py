# import module
from urllib.request import urlopen
from urllib.error import *
import time
import smtplib
server = smtplib.SMTP('smtp.gmail.com', 587)

server.starttls()
server.login('demo991378@gmail.com', 'demo@9913')
sender = 'demo991378@gmail.com'
resiver = 'ujjvalvaghasiya@gmail.com'

message = """ results is live plese check this
'www.gseb.org' """
# try block to read URL
for x in range(500):
    try:
        html = urlopen(
            "https://www.gseb.org/")

    # except block to catch
    # exception
    # and identify error
    except HTTPError as e:
        print("HTTP error", e)

    except URLError as e:
        print("Opps ! Page not found!", e)

    else:

        try:

            server.sendmail(sender, resiver, message)
            print("Successfully sent email")
        except Exception:
            print("Error: unable to send email")

    time.sleep(10)
