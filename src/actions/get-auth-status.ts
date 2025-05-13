"use server";

import { db } from "@/lib";
import { currentUser } from "@clerk/nextjs/server";

const getAuthStatus = async () => {
    try {
        const user = await currentUser();

    if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
        return { error: "User not found" };
    }

    let clerkId = user.id;

    const existingUser = await db.user.findFirst({
        where: {
            clerkId,
        },
    });

    console.log("existingUser", existingUser);

    if (!existingUser) {
        await db.user.create({
            data: {
                clerkId,
                email: user.primaryEmailAddress.emailAddress,
                name: user.firstName || user.lastName,
                // name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
                image: user.imageUrl,
            },
        });
    }
    return { success: true };
}    catch(error)  {
        console.error("Auth error", error);
        return { error: "Internal server error" };
    }
};

export default getAuthStatus;
