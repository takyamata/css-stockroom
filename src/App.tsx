import React from 'react';
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

function App() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<AppLayout/>}>
					{/* <Route index element={<Home/>} /> */}
					{/* <Route path="/report" element={<Report/>} /> */}
					{/* URLがマッチしなかった場合に表示されるページ */}
					{/* <Route path="*" element={<NoMatch/>} /> */}
				</Route>
			</Routes>
		</Router>
	)
}

export default App

