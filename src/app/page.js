'use client'

import { useEffect, useState } from 'react'
import BaseSearch from './BaseSearch'
import UserBox from './User'

export default function Home() {
	const [username, setUsername] = useState('')
	const [user, setUser] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
		setUsername(e.target.querySelector('input').value)
	}

	useEffect(() => {
		if (username) {
			fetch('https://api.github.com/users/' + username)
				.then((res) => {
					if (res.ok) {
						return res.json()
					}
					return Promise.reject(res)
				})
				.then((ghUser) => {
					setUser(ghUser)
				})
				.catch((err) => {
					// Tratamento de erros
					console.log(err.status, err.statusText)
					console.log('Erro do request: ' + err)
					setUser('notFound')
				})
		}
	}, [username])

	return (
		<>
			<BaseSearch onSubmitAction={handleSubmit} />
			{user ? <UserBox user={user} /> : ''}
		</>
	)
}
