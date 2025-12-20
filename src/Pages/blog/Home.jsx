import { Layout } from '../global/components/layout/Layout'
import { Card } from './components/Card'

export const Home = () => {
  return (
    <Layout>
        <div className='flex flex-wrap items-center justify-center'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </Layout>
  )
}
