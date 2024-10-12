'use client'

import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import React, { useState, useEffect } from "react";

export default function Matches() {
    const {user, isAuthenticated, isLoading} = useAuth0();
    const [matches, setMatches] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function getMatches() {
            if (!user)  return;
            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const collections = docSnap.data().matches || [];
                setMatches(collections);
            } else {
                await setDoc(docRef, {matches: []});
            }
        }

        getMatches()
    }, [user])

    if (isLoading || !isAuthenticated) {
        return <div></div>
    }

    return (
        <div>
            <Image src="/logos/text.png" alt="Mantine logo" />
        </div>
    );
}