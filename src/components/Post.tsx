import { Link } from 'react-router-dom'

export interface Postable {
  id: string;
  author: string;
  body: string;
  timestamp: Date;
}

interface PostProps {
  key: string;
  post: Postable;
}

export default function Post(props: PostProps) {
  return (
    <> 
      <Link to={`/user/${props.post.author}`}>
        <p>{props.post.author}</p>
      </Link>
      <p>{props.post.body}</p>
      <p>{props.post.timestamp.toLocaleString()}</p>
    </>
  );
}