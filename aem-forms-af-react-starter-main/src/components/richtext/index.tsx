import React from 'react';
import {useRenderer, useRuleEngine} from '@aemforms/af-react-renderer';
import {FieldJson, State} from '@aemforms/af-core';
import { baseConvertor, combineConvertors, richTextString } from '@aemforms/af-react-components';

const RichText = function (props: State<FieldJson>) {
    
    const [state, handlers] = useRuleEngine(props);

    return(
        state.visible ? richTextString(state?.label?.value) : ""
    )
}

export default RichText;