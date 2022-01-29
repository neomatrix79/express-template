"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.set("port", 6000);
const port = app.get("port");
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.static("./public")); // src 와 동일한 위치의 public 폴더에 있는 정적 파일은 localhost:3000/demo.html 형식으로 public 폴더명 없이 접근 가능
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)("neo"));
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: false,
    secret: "neo",
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: "sesstion-cookie",
}));
app.use("/", routes_1.default);
app.listen(port, () => {
    console.log(`Listening ${port} port...`);
});
//# sourceMappingURL=index.js.map