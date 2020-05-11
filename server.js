const express= require("express"); 
const cors= require("cors"); 
const bodyParser= require("body-parser"); 
const path= require("path"); 
const nodemailer= require("nodemailer");
const compression = require("compression");
const enforce= require("express-sslify");

if(process.env.NODE_ENV!=="production") require("dotenv").config(); 

const stripe= require("stripe")(process.env.STRIPE_SECRET_KEY);


const app=express(); 

const port=process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

app.use(cors());

if(process.env.NODE_ENV==="production"){
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "client/build", "index.html"))
    })
}

app.listen(port, error=>{
    if(error) throw error; 
    console.log("server running on port " + port);
})

app.get("/service-worker.js",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
})

app.post("/payment", (req, res)=>{

    const body=
    {
        source: req.body.token.id,
        amount: req.body.amount, 
        currency: "usd"

    }

    stripe.charges.create(body,(stripeErr, stripeRes)=>{

        if(stripeErr){
            res.status(500).send({error: stripeErr});
        }
        else{
            res.status(200).send({success: stripeRes});
        }
    })
})

app.post("/contact", (req,res)=>{
        nodemailer.createTestAccount((err, account)=>{
    
            const htmlEmail= `
            <h3>Contact Details</h3>
            <u>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            </u>
            <h3>Message</h3>
            <p>${req.body.message}</p>
            `
            let transporter= nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587, 
                auth: {
                    user: testAccount.user, 
                    pass: estAccount.pass 
                }
            })
        
            let mailOptopns={ 
                from: '"Fred Foo 👻" <foo@example.com>', 
                to:"bar@example.com, baz@example.com",
                replyTo:"test@testaccount.com", //example
                subject: "new message", 
                text: req.body.message, 
                html: htmlEmail
            }
    
            transporter.sendMail(mailOptopns, (err, info)=>{
                console.log(mailOptions);
                if(err){
                    return console.log(err)
                }
                console.log("Message Sent: %s", info.message);
    
                console.log("Message URL: %s", nodemailer.getTestMessageUrl(info) )
            })  
    
        })
    })