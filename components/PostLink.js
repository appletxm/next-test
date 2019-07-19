import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href="/Post/[id]" as={`/Post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
    {/* <Link href={`/Post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link> */}
  </li>
);

export default PostLink