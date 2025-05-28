"use server";

import { db } from "@/lib";

const getAuthStatus = async () => {
    try {
        // TODO: Implement your custom authentication logic here
        const session = await getSession(); // You'll need to implement this based on your auth solution
        
        if (!session) {
            return { error: "User not authenticated" };
        }

        const user = await db.user.findFirst({
            where: {
                id: session.userId,
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
