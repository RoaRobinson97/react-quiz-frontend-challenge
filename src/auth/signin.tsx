import * as React from 'react'
import {Alert, AlertDescription, AlertIcon, Button, Container, Flex, Image} from '@chakra-ui/react'

import FullPageSpinner from '@/common/full-page-spinner'
import meow from './meow.png'
import PropTypes from 'prop-types'
import { FC } from 'react'

 const SignIn = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  if (loading) {
    return <FullPageSpinner />
  }

  if (error) {
    return (
      <Container textAlign="center" minHeight="100vh" overflow="hidden">
        <Flex width="100%" minHeight="100vh" alignItems="center" justifyContent="center">
          <Alert status="error" w={250} borderRadius={5} my={10}>
            <AlertIcon />
            <AlertDescription w={200}>{error}</AlertDescription>
          </Alert>
        </Flex>
      </Container>
    )
  }

  return (
    <Container textAlign="center" minHeight="100vh" overflow="hidden">
      <Flex width="100%" minHeight="100vh" alignItems="center" justifyContent="center">
        <Button as="a" size="lg" leftIcon={<Image src={meow} h={6} mr={2} />}>
          Sign in using CatHub
        </Button>
      </Flex>
    </Container>
  )
}

export default SignIn
