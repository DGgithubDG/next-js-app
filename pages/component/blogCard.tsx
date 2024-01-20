import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const BlogCard: FC<Props> = ({ title, description }): JSX.Element => {
  return (
    <div>
      <h1 className='text-3xl '>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
2