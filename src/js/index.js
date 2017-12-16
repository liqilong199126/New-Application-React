import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import MediaQuery from 'react-responsive';

import PCIndex from './components/pc_index.js';
import MobileIndex from './components/mobile_index.js';

import { Button } from 'antd';

import 'antd/dist/antd.css';

export default class Index extends React.Component{
	render() {
		return (
            <div>
               <MediaQuery query='(min-device-width: 1224px)'>
                   <PCIndex/>
               </MediaQuery>
               <MediaQuery query='(max-device-width: 1224px)'>
                   <MobileIndex/>
               </MediaQuery>
            </div>
		);
	};
}

ReactDOM.render(<Index/>, document.getElementById('mainContainer'));