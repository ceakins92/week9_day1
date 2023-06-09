import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Post from '../components/Post';
import { Postable } from '../components/Post';
import Body from '../components/Body';

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function PostsPage({endpoint,heading}:{endpoint:string,heading:string}) {
  console.log(base_api_url)
  const [postsArray, setPostsArray] = useState<Postable[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${base_api_url}${endpoint}`
      );
      if (res.ok) {
        const data = await res.json();
        setPostsArray(data);
      }
    })();
  }, []);

  return (
    <>
      
      <Body makepost header={ false }>
        {postsArray.length === 0 ? (
          <Spinner animation="grow" />
        ) : (
          <>
          <h3>{ heading }</h3>
            {postsArray.map((post) => {
              return <Post post={post} key={post.id} />;
            })}
          </>
        )}
      </Body>
    </>
  );
}