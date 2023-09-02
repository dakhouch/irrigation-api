import user from "../models/user.mjs";
import jwt from "jsonwebtoken";


const login=async (req, res, next) => {
    const { username, password } = req.body;
    if (!(username && password)) {
       return res.status(400).send("All input is required");
    }
   if(username !== "driss" || password !== "qwerty123"){
       return res.status(400).send("Invalid Credentials");
   }
    let token;
    try {
        token = jwt.sign(
            {userId: username},
            "piste_innovation",
            { expiresIn: "2d" }
        );
    } catch (err) {
        return res.status(500).send("Error! Something went wrong.");
    }
    res
        .status(201)
        .json(
            { userId: username,token: token },
        );
};
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    jwt.verify(token.split(" ")[1], 'piste_innovation', (err, user) => {
        if (err) return res.status(403).json({ message: 'Forbidden' });
        req.user = user;
        next();
    });
};
export const authentificationService={
    login,
    verifyToken
}