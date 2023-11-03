import {Slider} from '@adobe/react-spectrum'

import {FieldJson, State} from '@aemforms/af-core';
import React, { useCallback } from 'react';
import {useRuleEngine} from '@aemforms/af-react-renderer';

const SliderComponent = function (props: State<FieldJson>) {
    
  const [state, handlers] = useRuleEngine(props);

  const res = {
    minValue : state.minimum,
    maxValue: state.maximum,
    label : state.value,
    defaultValue: state.default,
    step: state?.properties?.layout?.step,
    onChange : (value: number) => {
      handlers.dispatchChange(value);
    }
  }

  const actions = useCallback(() => {
  }, [handlers])

  return(
    <Slider {...res} {...actions}  />
    );
};

export default SliderComponent;