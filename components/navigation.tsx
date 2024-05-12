"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();
    return <nav>
        <ul>
            <li>
                <Link href="/">Home</Link> {path === "/" ? "Now" : ""}
            </li>
            <li>
                <Link href="/nemesis">Nemssis</Link> {path === "/nemesis" ? "Now" : ""}
            </li>
        </ul>
    </nav>
}