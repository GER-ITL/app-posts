import profileReducer, {
	addPostActionCreator,
	removePostActionCreator,
} from './profile-reducer'
let state = {
	postsData: [
		{
			id: 1,
			img: 'https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg',
			mess: 'Hello bro',
			count: 10,
		},
		{
			id: 2,
			img: 'https://img.freepik.com/premium-vector/anonymous-hooded-avatar-hidden-user-incognito-hacker-isolated-vector-illustration_619989-1263.jpg',
			mess: 'How are you?',
			count: 20,
		},
	],
	profileData: [],
}

it('length of posts should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator('next post')

	// 2. action

	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.postsData.length).toBe(5)
})

it('after deleting length of posts should be decremented', () => {
	// 1. test data
	let action = removePostActionCreator(1)

	// 2. action

	let newState = profileReducer(state, action)

	// 3. expectation
	expect(newState.postsData.length).toBe(3)
})
