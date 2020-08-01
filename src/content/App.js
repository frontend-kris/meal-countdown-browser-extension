import React, { useState } from 'react'
import browser from 'webextension-polyfill'
import PermissionToEat from './includes/PermissionToEat'
import DietTimer from './includes/DietTimer'

const App = () => {
	const countDownCookie = localStorage.getItem('countDownDate')
	const isTimePassed = countDownCookie < new Date().getTime()

	const [visible, setVisible] = useState(0)
	const [meals, setMeals] = useState(0)
	const [showTimer, setShowTimer] = useState(!isTimePassed)
	const [showPermissionToEat, setShowPermissionToEat] = useState(isTimePassed)

	browser.runtime.onConnect.addListener(function listener (port) {
		port.onMessage.addListener(function (action) {
			setVisible(action.visible)
			browser.runtime.onConnect.removeListener(listener)
		})
	})

	/**
	 * Toggle for extension popup
	 */
	if (!visible) {
		return null
	}

	/**
	 * Set next meal time.
	 * Confirm you have eaten a meal.
	 * Hide permission to eat.
	 * Show countDown to next meal.
	 */
	const eaten = () => {
		let timeLeft = new Date()
		timeLeft.setHours(timeLeft.getHours() + 3)
		timeLeft = timeLeft.getTime()
		localStorage.setItem('countDownDate', timeLeft)
		
		setMeals(meals + 1)
		setShowPermissionToEat(!showPermissionToEat)
		setShowTimer(!showTimer)
	}

	return (
		<div className="App App--fade">

			<div className="graphic-context">
				<img src="https://placeimg.com/250/450/people" width="250" height="450"/>
			</div>

			<div className="container">
				<p className="diet__summary">{meals ? meals : 0}/5 posiłków zjedzono</p>
				{/* { showPermissionToEat && isTimePassed ? <PermissionToEat confirmEating={eaten} /> : null } */}
				{ showTimer && !isTimePassed ? <DietTimer timeToEnd={countDownCookie}/> : null }
			</div>
		</div>
	)
}

export default App
