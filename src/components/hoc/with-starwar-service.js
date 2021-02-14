import React from 'react';
import { StarwarServiceConsumer } from '../starwar-service-context';

const withStarwarService = () => (Wrapped) => {

  return (props) => {
    return (
      <StarwarServiceConsumer>
        {
          (starwarService) => {
            return (<Wrapped {...props}
                     starwarService={starwarService}/>);
          }
        }
      </StarwarServiceConsumer>
    );
  }
};

export default withStarwarService;
