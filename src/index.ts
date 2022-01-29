import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import morgan from "morgan";
import indexRouter from "./routes";

const app = express();

app.set("port", 6000);

const port = app.get("port");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("./public")); // src 와 동일한 위치의 public 폴더에 있는 정적 파일은 localhost:3000/demo.html 형식으로 public 폴더명 없이 접근 가능
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("neo"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "neo",
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "sesstion-cookie",
  })
);

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Listening ${port} port...`);
});
