import React from 'react'
import UseEffectAPI from './useEffect/useEffectAPI'
import { Button, Box } from "@chakra-ui/react"


const App = () => {
  return (
    <div>
      <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" display="flex" justifyContent="center" alignItems="center">
      <Button as="a" target="_blank" variant="outline" href="https://amazon.com">
  Hello
</Button>
        </Box>
      
      <UseEffectAPI/>
    </div>
  )
}

export default App
