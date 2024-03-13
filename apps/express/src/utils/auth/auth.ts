import { users } from '../../db/schema'
import { db } from '../../db/migration';
import { z } from 'zod'
import { v4 as uuid } from 'uuid'
import { Argon2id } from "oslo/password";


interface signupSchema {
    name: string | null,
    email: string | null,
    password?: string | null,

    githubUserName?: string | null,
    githubId?: number | null
}

const signupZodSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().nullable(),
    githubUserName: z.string().nullable(),
    githubId: z.string().nullable()
})

export const signup = async ({
    name,
    email,
    password,
    githubId,
    githubUserName
}: signupSchema) => {
    try {

        const signUpParsed = signupZodSchema.parse({ name, email, password, githubId, githubUserName })
        let hashedPass = null

        if (!signUpParsed) return null

        const id = uuid()
        if (signUpParsed.password) hashedPass = await new Argon2id().hash(signUpParsed.password)

        const newUser = db.insert(users).values({
            id,
            name: signUpParsed.name,
            email: signUpParsed.email,
            password: hashedPass,
            githubId: signUpParsed.githubId,
            githubUserName: signUpParsed.githubUserName
        })

        return newUser

    } catch (error) {
        console.log(error);
        return error
    }
}