export default function BaseSearch({ onSubmitAction }) {
	return (
		<>
			<img
				src='/perfilGitHub.png'
				alt='Perfil Github'
				className='max-h-20 mx-auto mt-10'
			/>
			<form
				className='w-full mt-10 border border-[#ddd] max-w-[32rem] mx-auto rounded-xl bg-white overflow-hidden flex justify-between'
				onSubmit={onSubmitAction}
			>
				<input
					type='text'
					className='bg-transparent font-semibold text-xl w-[calc(100%-4.5rem)] outline-none placeholder:text-black py-4 ml-4'
					name='username'
					placeholder='Digite um usuário do Github'
				/>
				<button
					type='submit'
					className='size-16 bg-[var(--blue)] rounded-xl border-[#ddd] border cursor-pointer'
				>
					<img src='search.svg' alt='Search icon' className='mx-auto' />
				</button>
			</form>
		</>
	)
}
