# Carousel and NewsLetter Modal, technical test
***
Application created to show technical skills, developing frontend web applications.
Its main porpuse is show a NewsLetter subscriber modal, you can enter you email and you will be subscribed.
A the same time you can see a Carousel with auto slide and information by every image.

# Important!
When you enter an email, and you subscribed, you will not get longer the Subscribe modal, due to you already are subscribed.
If you want to test other scenarios, don't add a valid email that includes '@' and '.' otherwise you should delete all the
cache data to restart the subscription status storaged on your browser.

Once you enter you email and you Clicked Subscribe, you can check your email address, because you should get a Welcome email,
Enter a valid email to check the full process.

Please take consider that, due to this is test project, it could be possible to have some error when sending email due to this is a free service and third party service and this make some potential inconveniences, I decided to add this real option
to have a better user experience and get an email as should be in a real project environment

### Test Application Online
*** 
This Application have been deployed in GCP using services as Cloud Run and Artifact Registry and others

You can go to the next URL to see a Demo online:
https://abel-alvarez-test-5twxazkv7q-uc.a.run.app/


### Local Installation
```
Make sure your have git installed and github account.

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

5. Please uncomment and add value to VARIABLES on .env file
    EMAIL=youremail@gmail.com
    EMAIL_PASS=yourpassword

    need help with generate password? go to https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer 

6. Make sure you have Docker installed and running

    if not go to: https://docs.docker.com/engine/install/ to install it

7. Create docker Image 
    execute command: 
    docker build -t abel-alvarez-test .

8. Once image was created 
    excute command:  
    docker run --env-file .env -p 3000:3000 abel-alvarez-test

    Please add the env file to have a better experience in local environment.
    The .env file is used to set env variables and to get the welcome email, 
    if variables are not added, you will get and error when you try to subscribe.


9. Open Browser and go to http://localhost:3000
  
If you have some issue or need support you can send an email to abelalvarezdev@gmail.com

```