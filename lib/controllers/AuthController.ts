import * as mongoose from 'mongoose';
import { User } from '../models/userModel';
import { Request, Response } from 'express';
import { SecurityModule } from "../../config/config";
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const user = mongoose.model('User', User);

export class AuthController {
    private security = new SecurityModule();

    public createUser(req: Request, res: Response) {
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        user.create({
            username: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }, (error, user) => {
            if (error) {
                return res.status(500).send("There was a problem registering the user.");
            }

            // create a token
            var token = jwt.sign({ id: user._id }, this.security.SecurityKey(), {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).send({ auth: true, token: token });
        });
    }

    public decodeToken(req: Request, res: Response) {
        var token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }


        jwt.verify(token, this.security.SecurityKey(), function (err, decoded) {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
            res.status(200).send(decoded);
        });

    }

}