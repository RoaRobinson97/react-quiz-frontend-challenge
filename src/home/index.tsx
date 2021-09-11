import * as React from 'react'
import {Avatar, Box, Container, Flex, Stack, Text} from '@chakra-ui/react'

import FullPageSpinner from '@/common/full-page-spinner'
import {useThisUserQuery} from '@/graphql'
import {Redirect} from 'react-router-dom'
import counterSlice from '../auth/state'
import { useDispatch } from 'react-redux'
import { setUser } from '@/auth/state'

const Home = () => {
  const {data, loading} = useThisUserQuery()
  const dispatch = useDispatch()
  dispatch(setUser(data))

  if (loading) {
    return <FullPageSpinner />
  }

  return (

    <Container textAlign="center" minHeight="100vh" overflow="hidden">
      <Flex width="100%" minHeight="100vh" alignItems="center" justifyContent="center">
        <Stack spacing={2} direction="column">
          <Box textAlign="center">
            <Avatar name={data?.me?.name} src={data?.me?.avatar} />
          </Box>
          <Text textAlign="center" fontSize="2xl">
            Hi, {data?.me?.name}!
          </Text>
        </Stack>
      </Flex>
    </Container>
  )
}

export default Home
