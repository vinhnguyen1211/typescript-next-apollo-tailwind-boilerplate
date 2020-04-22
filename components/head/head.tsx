/* eslint-disable */
import NextHead from 'next/head'
import React from 'react'

interface Props {
  title?: string;
  description?: string;
}

export const Head: React.FC<Props> = props => {
  const { title, description, children } = props
  const titleValue = title || 'GraphQL'
  const descriptionValue = description ?? 'GraphQL SSR Demo'

  return (
    <NextHead>
      {children}
      <title>{titleValue}</title>
      <meta name='description' content={descriptionValue} />
      <meta property='og:site_name' content='GraphQL SSR' />
      <meta
        name='og:image'
        content='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
      />
    </NextHead>
  )
}
