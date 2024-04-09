'use client'

import { useSession } from "next-auth/react"

function DummyComponent() {
    const session = useSession()
    return (
        <div className="text-white w-full h-6 bg-blue-600">
            This is a Demo: {session.data?.user?.name}
        </div>
    )
    }

export default DummyComponent