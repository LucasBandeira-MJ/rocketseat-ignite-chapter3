import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.query)
    const users = [
        {id: 1, name: 'Lucas'},
        {id: 2, name: 'Ducas'},
        {id: 3, name: 'Bucas'},
    ]

    return res.json(users)
}