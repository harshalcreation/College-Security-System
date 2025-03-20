if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError = require("./utility/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./Modules/user.js");
const bodyParser = require('body-parser');
const twilio = require('twilio');

const listingsRouter = require("./routs/listings-routs.js");
const reviewsRouter = require("./routs/reviews-routs.js");
const userRouter = require("./routs/user-routs.js");
const { handleCallRequest } = require('./controllers/callController');

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs-mate"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Session Configuration
const sessionOption = {
    secret: 'mysupersecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};
app.use(session(sessionOption));
app.use(flash());

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash Messages Middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.failure = req.flash("error");  // Correct spelling
// Fixed typo
    res.locals.currentUser = req.user;
    next();
});

// Database Connection
const dburl = process.env.ATLASDB_URL;
async function main() {
    await mongoose.connect(dburl);
    console.log("Connected to MongoDB");
}
main().catch(err => console.log(err));

// Routes
app.get("/", (req, res) => {
    res.render("view.ejs");
});

app.get("/chatbot", async (req, res) => {
    console.log("Chatbot route accessed");
    res.render("users/chat.ejs");
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

// Catch-All Route for 404 Errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!!!"));
});

// Global Error Handling Middleware
app.use((error, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = error;
    res.status(statusCode).render("listings/error.ejs", { message });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});