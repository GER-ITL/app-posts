let initialState = {
    users:[
        {
            id: 1,
            fullname:'Dante R.',
            status: 'Im a boss',
            location:{
                citi:'Moscow',
                country: 'Russia'
            }
        },
        {
            id: 2,
            fullname:'Alex N.',
            status: 'Im a boss',
            location:{
                citi:'Dybna',
                country: 'Russia'
            }
        },
        {
            id: 3,
            fullname:'Dmitriy S.',
            status: 'Im a boss',
            location:{
                citi:'Ximki',
                country: 'Russia'
            }
        },
        {
            id: 4,
            fullname:'Kate',
            status: 'Im a boss',
            location:{
                citi:'Tverb',
                country: 'Russia'
            }
        },
    ]
}


const usersReducer = (state = initialState, action) => {
    
    return state
}
export default usersReducer