export default function UserBox({ user }) {
	return (
		<div className='w-full lg:w-[50rem] mb-8 lg:mb-0 py-4 px-14 mt-8 bg-[#d9d9d9] rounded-3xl mx-auto flex flex-col lg:flex-row'>
			{user !== 'notFound' ? (
				<>
					<img
						src={user.avatar_url}
						alt=''
						className='size-56 object-cover rounded-full border-2 border-[var(--blue)] mx-auto lg:mx-0'
					/>
					<div className='my-auto lg:ml-8'>
						<h2 className='text-xl text-[var(--blue)] font-bold text-center lg:text-left mt-4 lg:mt-0'>
							{user.login}
						</h2>
						<div className='w-full text-justify font-light text-base mt-4'>
							{user.bio}
						</div>
					</div>
				</>
			) : (
				<h2 className='text-xl text-[#f00] font-normal w-full text-center mt-4 lg:mt-0 '>
					Nenhum perfil foi encontrado com ese nome de usuário. <br />
					Tente novamente
				</h2>
			)}
		</div>
	)
}
