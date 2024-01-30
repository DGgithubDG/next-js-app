import { get } from "http";
import { NextApiHandler } from "next";
import fs from 'fs'
import path from "path";
import matter from "gray-matter";

const handler: NextApiHandler = (req, res) => {

    const { method } = req;

    switch(method) {
        case 'GET': 
            return res.json({ Ok : true })
        default:
            return res.status(404).send('Not Found 123' )


    }

// console.log(req.method)

// const readPostsInfo = () => {
//     const readPath = path.join(process.cwd(), 'posts');
//     const dirs = fs.readdirSync(readPath);
//     dirs.map((filename) => {
//         const PathreadPath = path.join(process.cwd(), 'posts/ ' + filename );
//         const filecontent = fs.readFileSync(PathreadPath, {encoding: 'utf-8'})
//         console.log(matter(filecontent)) 

//     })
//     return('')
// }

}

 
export default handler;


// import { NextApiHandler } from "next";
// import fs from 'fs';
// import path from "path";

// const handler: NextApiHandler = (req, res) => {
//     const { method } = req;

//     switch (method) {
//         case 'GET': {
//             const data = readPostsInfo();
//             return res.json({ postInfo: data });
//         }
//         default:
//             res.status(404).send('Not Found 123');
//     }
// };

// const readPostsInfo = () => {
//     const readPath = path.join(process.cwd(), 'posts');
//     const dirs = fs.readdirSync(readPath);

//     const contentArray = dirs.map((filename) => {
//         const filePath = path.join(process.cwd(), 'posts', filename);
//         const fileContent = fs.readFileSync(filePath, 'utf-8'); // Specify encoding
//         console.log(fileContent);
//         return { filename, content: fileContent }; // Return an object with filename and content
//     });

//     return contentArray;
// };

// export default handler;
