'use client';

import { HumanSciences } from "@/components/data/books";
import BookRow from "@/components/materials/bookRow";
import React from 'react';

export default function Home() {
    return (
        <>
            <BookRow slug={'home'} />
        </>
    )
}