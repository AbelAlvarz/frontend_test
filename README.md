# Carousel and NewsLetter Modal, technical test
***
Application created to show technical skills, developing frontend web applications.
Its main porpuse is show a NewsLetter subscriber, you can enter you email and you will be subscribed.
A the same time you can see a Carousel with auto slide.

# Important!
When you enter an email, and you subscribed, you will not get longer the Subscribe modal, due to you already are subscribed.
If you want to test other scenarios, don't add a valid email that includes '@''.' otherwise you should delete all the
cache data to restart the subscription status.

Once you enter you email and you Clicked Subscribe, you should check your email address, and by this reason I request you,
Enter a valid email to check the full process, you can check your email and you should have  a welcome Email.

Please take on count that, due to this is test project could be possible to have some error when sending email due to this is a free service and could have inconveniences.

### Test Application Online
*** 
This Application have been deployed in GCP using services as Cloud Run and Artifact Registry

You can go to the next URL to see a Demo:
https://abel-alvarez-test-5twxazkv7q-uc.a.run.app/


### Local Installation
```
Make sure your have git installed.

1. Open a terminal
2. Execute Clone project,
	command: 
    git clone https://github.com/AbelAlvarz/frontend_test.git
3. Go to project
	command: 
    cd frontend_test
4. Execute 
    command: 
    npm install

5. Please include a file .env and add the next VARIABLES
    EMAIL=youremail@gmail.com
    EMAIL_PASS=yourpassword

    need help with this? go to https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer 

5 Make sure you have Docker installed and running

    if not go to: https://docs.docker.com/engine/install/ to install it

6. Create docker Image 
    execute command: 
    docker build -t abel-alvarez-test .

7. Once image was created 
    excute command:  
    docker run --env-file .env -p 3000:3000 abel-alvarez-test


8. Open Browser and go to http://localhost:3000
  
9. If you have some issue or need support you can send an email to abelalvarezdev@gmail.com

```