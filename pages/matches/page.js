'use client'

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Matches() {
    const {user, isAuthenticated, isLoading} = useAuth0();
}