import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { applyFixes } from 'eslint/lib/linter/source-code-fixer';

class App {
    public express: express.Application;

    public constructor () {
        this.express = express()

        this.database()
        this.middlawares()
        this.routes()
    }

    private middlawares () :void{

        this.express.use(express.json())
        this.express.use(cors())
    }

    private database () :void {
        mongoose.connect('mongodb://localhost27017/tsnode', {
            useNewUrlParser: true
        })
    }

    private routes () : void {
        this.express.get('/', (req, res) => {
            return res.send('Hello World');
        })
    }
}

export default new App().express;