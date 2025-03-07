'use client';

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const Navigation = ()=> {
    const ref = useRef(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const router = useRouter();

	const changeLanguage = ( event )=> {
		const lang = event.target.value;
		cookieStore.set('language', lang);
		router.refresh();
	}

    useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

    return (
    <header ref={ref}>
        <div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
						<div className="flex">
							<button value="English" class="p-2 flex flex-row items-center border border-white-300 text-sm font-medium text-white-700 hover:bg-white-100 focus:bg-white-200 focus:outline-none"
							onClick={(e)=> changeLanguage(e)}>
								En
							</button>

							<button value="Espanol" class="p-2 flex flex-row items-center border border-white-300 text-sm font-medium text-white-700 hover:bg-white-100 focus:bg-white-200 focus:outline-none "
							onClick={(e)=> changeLanguage(e)}>
								Es
							</button>
						</div>
					</div>

					{usePathname() != "/" ?
						<Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
						<ArrowLeft className="w-6 h-6 " />
					</Link> : <div/>}
					
				</div>
			</div>
    </header>);
};