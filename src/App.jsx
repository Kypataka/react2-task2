import styles from './app.module.css'
import { useState } from 'react'


export function App() {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение')

		if (promptValue.length < 3) {
			setError("Введённое значение должно содержать минимум 3 символа")
		} else {
			setValue(promptValue)
			setError('')
		}
	}

	let isValueVaild = false
	if (value.length >= 3) {
		isValueVaild = true
	}


	const onAddButtonClick = () => {
		const updatedList = [...list, {id: Date.now(), value}]
		setList(updatedList)
		setValue('')
	}

  return (
    <>
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className="no-margin-text">
				Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
			</p>
			{error && <div className="error">{error}</div>}
			<div className={styles.buttonsContainer}>
				<button className="button" onClick={onInputButtonClick}>Ввести новое</button>
				<button className="button" disabled={!isValueVaild} onClick={onAddButtonClick}>Добавить в список</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список</h2>
				{list.length === 0 ? ( <p className="no-margin-text">Нет добавленных элементов</p>
			) : (
				<ul className={styles.list}>
					{list.map(item => (
						<li key={item.id} className={styles.listItem}>{item.value}</li>
					))}
				</ul>
			)}
			</div>
		</div>
    </>
  )
}

