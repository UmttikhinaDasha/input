import React from 'react';
import Input from '../input/Input';

function App() {
  return (
      <div className='wrapper'>
        <div className='wrapper__col'>
          <Input label={'Default'} />
          <Input
              label={'Caption'}
              caption={'Here’s a hint that might help you.'}
          />
          <Input
              label={'Disabled'}
              caption={'Here’s a hint that might help you.'}
              disabled={true}
          />
          <Input
              label={'Success'}
              caption={'Success message!'}
              validation={'success'}
          />
          <Input
              label={'Error'}
              caption={'Uh oh! There was an error!'}
              validation={'error'}
          />
        </div>
        <div className='wrapper__col'>
          <Input label={'Default'} search={true} />
          <Input
              label={'Caption'}
              caption={'Here’s a hint that might help you.'}
              search={true}
          />
          <Input
              label={'Disabled'}
              caption={'Here’s a hint that might help you.'}
              disabled={true}
              search={true}
          />
          <Input
              label={'Success'}
              caption={'Success message!'}
              validation={'success'}
              search={true}
          />
          <Input
              label={'Error'}
              caption={'Uh oh! There was an error!'}
              validation={'error'}
              search={true}
          />
        </div>
        <div className='wrapper__col'>
          <Input label={'Default'} small={true} />
          <Input label={'Default'} search={true} small={true} />
          <Input
              label={'Caption'}
              caption={'Here’s a hint that might help you.'}
              small={true}
          />
          <Input
              label={'Disabled'}
              caption={'Here’s a hint that might help you.'}
              disabled={true}
              small={true}
          />
          <Input
              label={'Success'}
              caption={'Success message!'}
              validation={'success'}
              small={true}
          />
          <Input
              label={'Error'}
              caption={'Uh oh! There was an error!'}
              validation={'error'}
              small={true}
          />
        </div>
      </div>
  );
}

export default App;
