

/*

//Authentication & Authorization

    Authentication --> Prove urself first to get access(validate the user )
    Authorisation --> parmit hain kya change karne ke liye , check the user for admin rights 

    Cookies and Session --> Server is the dumb Aadmi vo bhul jata hain ki tum kon ho 
    Browser me string save ho jayegi -->> like the Session id (To stop from rendering )

//sabse pahle humein kuchh cheejein seekhni hai alag alag
   
    i) cookie kaise set karte hai
    ii) bcrypt kaise use karte hai for password encrytption and decryption
    iii) jwt kya hai and jwt mein data kaise store karein and baahar nikaalein

i) ---> create a new folder called biscut
        install jsonwebtoken , bcrypt , init -y

     install the package called cookie parser 


ii) --> lets use bcrypt 
        password ko encrypt karte hain with the help of encryption algorithm 
        ex  algo -- AES-256, AES-128, AES-192

        password ==> vmzxbalfvergrasudgcvycfcfd

iii) --> Lets start JWT 
        A JWT typically has three parts separated by dots (.):
        "npm i jsonwebtoken"
        xxxxx.yyyyy.zzzzz

        Header:

        {
        "alg": "HS256",
        "typ": "JWT"
        }

        Payload:

        {
        "sub": "1234567890",
        "name": "John Doe",
        "role": "admin"
        }

        Signature:
        Created by signing the encoded header and payload with a secret key (or private key).
        Ensures the token hasn't been tampered with.

        Basically JWT converts the long string into --> 3 parts 




*/

