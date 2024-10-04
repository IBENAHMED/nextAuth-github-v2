"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const Secret = () => {
    let { data: session } = useSession();
    return (
        <div>
            {session?.user?.email && <Link href="#">{session?.user?.email}</Link>}
        </div>
    )
}

export default Secret
