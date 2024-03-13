import { Router } from "express";
import { signup } from '../../utils/auth/auth'

export const authRouter = Router()

authRouter.post('/auth/signup', async (req, res) => {
    try {

        const reqBody: {
            name: string | null,
            email: string | null,
            password: string | null,

            githubUserName: string | null,
            githubId: number | null
        } = req.body

        const signUpResult = await signup({
            name: reqBody.name,
            email: reqBody.email,
            password: reqBody.password,
            githubId: reqBody.githubId,
            githubUserName: reqBody.githubUserName
        })

        return res.json({
            success: true,
            data: signUpResult
        })

    } catch (error) {
        console.log(error);
        return res.json({ error: error })
    }
})