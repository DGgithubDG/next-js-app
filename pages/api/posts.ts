import { get } from "http";
import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {

    const { method } = req;

    switch(method) {
        case 'GET':
        return res.json({ ok: true })
        default: res.status(404).send('Not Found 123' )


    }

// console.log(req.method)

}

 
export default handler;