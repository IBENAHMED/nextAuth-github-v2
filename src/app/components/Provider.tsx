"use client"

import { SessionProvider, SessionProviderProps } from 'next-auth/react'
import React from 'react'

const Provider = ({ session, children }: any) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider
