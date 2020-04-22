import React from 'react'
import classnames from 'classnames'
import { css } from 'linaria'

import { Head } from '../components/head/head'
import { NextPage } from 'next'
import { ApolloPageContext } from 'next-with-apollo'
import { gql } from 'apollo-boost'

const Home: NextPage<any> = (props) => {
  return (
    <div className='h-screen container mx-auto'>
      <Head title='GraphQL SSR' />
      <h1 className='text-2xl text-center mx-auto m-4'>
        Apollo GraphQL in Next.js with Server Side Rendering
      </h1>
      <div className=''>
        {props.continents.map((data: any) => (
          <ul className='ml-0 md:ml-40' key={data.code}>
            <li
              className={classnames([
                'p-2 m-2 text-primary',
                css`
                  margin-left: 24px;
                `
              ])}
            >
              <span className='text-gray-500'>[{data.code}]: </span>{data.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export const CONTINENTS = gql`
  query continents {
    continents {
      code
      name
    }
  }
`

Home.getInitialProps = async (context: ApolloPageContext) => {
  const { apolloClient } = context
  try {
    const { data } = await apolloClient.query({
      query: CONTINENTS
    })
    return data
  } catch (error) {
    return null
  }
}

export default Home
