// import Link from 'next/link'
// import Router from 'next/router'
import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

const Index = (props) => (
  <Layout>
    {/* <Link href={{ pathname: '/About', query: { name: 'Zeit' } }} title="About Page">
      <a>About Page</a>
    </Link> */}
    <ul>
      <PostLink title="Hello Next.js" id="0001"/>
      <PostLink title="Learn Next.js is awesome" id="0002"/>
      <PostLink title="Deploy apps with Zeit" id="0003" />
    </ul>
  </Layout>
)

export default Index