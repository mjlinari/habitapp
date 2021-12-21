const express = require("express");
const app = express();
const db = require("./config/db");
const volleyball = require("volleyball");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const { User, Property, Location, Category } = require("./models");
const router = require("./routes");

app.use(volleyball);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(sessions({ secret: "habitapp" }));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      User.findOne({
        where: {
          email: email,
        },
      })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", router);

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("listening at port 3001");
  });
});
