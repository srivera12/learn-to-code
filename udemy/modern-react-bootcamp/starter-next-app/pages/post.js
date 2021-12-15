import axios from 'axios';

export default function Post({ id, comments }) {
  return (
    <>
      <h1>POST PAGE #{id}</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </>
  );
}

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  const { data } = res;
  return { props: { id: id, comments: data } };
}
