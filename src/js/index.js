import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import PCIndex from './components/pc_index.js';


import { Button } from 'antd';

import 'antd/dist/antd.css';

export default class Index extends React.Component{
	render() {
		return (
            <div>
               <PCIndex/>
            </div>
		);
	};
}

ReactDOM.render(<Index/>, document.getElementById('mainContainer'));