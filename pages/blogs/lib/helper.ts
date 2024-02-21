import { get } from "http";
import { NextApiHandler } from "next";
import fs from 'fs'
import path from "path";
import matter from "gray-matter";
import { PostAPIResponse } from "../utils/types";


const readPostsInfo = (): PostAPIResponse => {
    const dirPathToRead = path.join(process.cwd(), "posts")
   const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), 'posts/' + filename);
    const fileContenct = fs.readFileSync(filePathToRead, {encoding: 'utf-8'})
  return matter(fileContenct).data
   })
   return data as any;
}

export default readPostsInfo