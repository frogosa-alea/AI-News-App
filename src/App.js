import React, { useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = '560915c8438bed3e2c69bb1dce96aa6d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command}) => {
        if(command === 'testCommand'){
          alert('This code was executed')
        }
      }
    })
  }, [])


  return (
    <div>App</div>
  )
}

export default App
