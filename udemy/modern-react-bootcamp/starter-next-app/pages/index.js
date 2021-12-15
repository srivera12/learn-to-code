import axios from 'axios';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <>
      <h1>OUR INDEX</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return { props: { posts: data } };
};
