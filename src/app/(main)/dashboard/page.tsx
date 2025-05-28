"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from 'react'

const DashboardPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-xl font-medium">
                Welcome to Dashboard!
            </h1>
            <p className="text-gray-500 mt-2">
                This is your dashboard page.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
                <Button onClick={() => router.push("/")} variant="outline">
                    Back to home
                </Button>
                <Button onClick={() => router.push("/sign-in")}>
                    Sign Out
                </Button>
            </div>
        </div>
    )
};

export default DashboardPage
