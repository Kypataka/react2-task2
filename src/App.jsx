import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react'

export const App = () => {
	const [steps, setSteps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)

	const isFirstStep = activeIndex === 0
	const isLastStep = activeIndex === steps.length - 1

	const clickBack = () => {
		if(!isFirstStep) {
			setActiveIndex(prev => prev - 1)
		}
  	}

	const clickForward = () => {
		if(!isLastStep) {
			setActiveIndex(prev => prev + 1)
		}
  	}

	const startFromBeginning = () => {
		setActiveIndex(0)
	}

	const selectStep = (index) => {
		setActiveIndex(index)
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>

					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={step.id}
								className={
									styles['steps-item'] +
									(index <= activeIndex ? ' ' + styles.done : '') +
									(index === activeIndex ? ' ' + styles.active : '')
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => selectStep(index)}
								>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>

					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={clickBack}
							disabled={isFirstStep}
						>Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? startFromBeginning : clickForward}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
};
