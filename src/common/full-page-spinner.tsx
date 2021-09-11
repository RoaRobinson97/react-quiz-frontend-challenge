import * as React from 'react'
import {Container, Flex, Spinner} from '@chakra-ui/react'

const FullPageSpinner = () => {
  return (
    <Container textAlign="center" minHeight="100vh" overflow="hidden">
      <Flex width="100%" minHeight="100vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Flex>
    </Container>
  )
}

export default FullPageSpinner
