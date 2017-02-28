import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import route from './routes'

render(<Router history={browserHistory} routes={route}/>,
   document.getElementById('app'));
