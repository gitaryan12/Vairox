"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const onCurrentUser = async () => {
    const user = await currentUser()
    if (!user) return redirect("/auth/sign-in")

    return user
}

export const onBoardUser = async () => {
    const user = await currentUser()
    // try {
    //     const found = await findUser
    // } catch (error) {}
}