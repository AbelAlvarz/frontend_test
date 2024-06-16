# Carousel and NewsLetter Modal, technical test
***
Application created to show technical skills, developing frontend web applications.
Its main porpuse is show a NewsLetter subscriber, you can enter you email and you will be subscribed
As this is a test application unfortunaly you will not get a welcome email.

# IMPORTANT
When you enter an email, and you subscribed, you will not get longer the Subscribe modal, due to you already are subscribed.
If you want to prove other scenarios, don't add a valid email that includes '@''.' otherwise you should delete all the
cache data to restart the subscription status.

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

5 Make sure you have Docker installed and running

    if not go to: https://docs.docker.com/engine/install/ to install it

6. Create docker Image 
    execute command: 
    docker build -t abel-alvarez-test .

7. Once image was created 
    excute command:  
    docker run -dp 3000:3000

8. Open Browser and go to http://localhost:3000
  
9. If you have some issue or need support you can send an email to abel.alvarez.dev@outlook.com

```