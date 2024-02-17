import { FC } from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  slug: string;

}

const BlogCard: FC<Props> = ({ title, description, slug }): JSX.Element => {
  return (
    <Link href={'/blogs/' + slug}>
    <div className='bg-blue-200 rounded block padbot mb-4"'>
      <div className='bg-dark p-5 rounded'>
      <h1 className='text-3xl '>{title}</h1>
    <p>{description}</p>
      </div>
 
    </div>
    </Link>
  

 
      
  );
};

export default BlogCard;



