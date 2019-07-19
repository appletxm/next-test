import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}