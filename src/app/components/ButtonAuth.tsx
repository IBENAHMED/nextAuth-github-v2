"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

const ButtonAuth = () => {

    let { data: session } = useSession();

    return (
        <div>
            {
                session?.user?.email ?
                    (<button onClick={() => signOut()}>sign out</button>) :
                    (<button onClick={() => signIn()}>sign in</button>)
            }
        </div>
    )
}

export default ButtonAuth
