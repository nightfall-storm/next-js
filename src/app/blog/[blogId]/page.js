import { notFound } from "next/navigation";

export default function Blog({params}){
    // ? coverts into a number
    const blogNumber = Number(params.blogId)
    if(!isNaN(blogNumber)){
        return <div>this the blog number {blogNumber}</div>
    }
    return notFound()
}