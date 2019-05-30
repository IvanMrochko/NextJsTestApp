import React, { Component } from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (

	<div>
		<h1>The auth Page of {props.appName}</h1>
		<User name="Ivan" age="25" />
	</div>

)
authIndexPage.getInitialProps = context => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ appName: "Super Auth App" });
		}, 1000);
	});
	return promise;
}
export default authIndexPage;