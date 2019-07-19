import Layout from '../components/Layout'

const help = function() {
  return (
    <p>This is the help page</p>
  );
}

export default function() {
  return (
    <Layout content={help()}></Layout>
  )
}