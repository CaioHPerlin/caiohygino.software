'use client';
import { useState } from 'react';

const NavBar = () => {
	const [isVisible, setVisibility] = useState(false);

	return (
		<header className="text-2xl -z-10 flex flex-col w-full pb-1 shadow-sm shadow-black bg-gradient-to-r from-emerald-500 via-cyan-700 to-sky-950 bg-emerald-600">
			<div className="flex z-10 w-full flex-row">
				<div className="flex flex-row basis-1/5 md:hidden justify-center bg-slate-800 items-center lg:items-baseline gap-3 px-10 py-8">
					<button onClick={() => setVisibility(!isVisible)}>
						<i className="fa-solid fa-bars"></i>
					</button>
				</div>
				<div className="flex flex-row basis-3/5 md:basis-1/5 justify-center bg-slate-800 items-center lg:items-baseline gap-3 md:px-10 py-8">
					<i className="fa-solid fa-laptop-code"></i>
					<h1 className="hidden lg:block">
						caiohygino<span className="font-bold">.software</span>
					</h1>
				</div>
				<nav className={'hidden md:flex flex-row basis-3/5 bg-slate-800 justify-between xl:justify-center xl:gap-24 items-center px-10 py-8'}>
					<a href="#">home</a>
					<a href="#">about</a>
					<a href="#">skills</a>
					<a href="#">projects</a>
				</nav>
				<div className="flex flex-row basis-1/5 bg-slate-800 justify-between xl:justify-end gap-2 xl:gap-12 items-end px-8 lg:px-10 py-8">
					<a href="#" className="fa-brands fa-linkedin"></a>
					<a href="#" className="fa-brands fa-github"></a>
					<div className="hidden md:block">
						<a href="#" className="fa-solid fa-envelope"></a>
					</div>
				</div>
			</div>
			{/*MOBILE MENU*/}
			<div className={`${isVisible ? 'translate-y-20' : '-translate-y-full'} absolute ease-in-out duration-200 flex flex-col w-full pb-1 shadow-sm shadow-black bg-gradient-to-r from-emerald-500 via-cyan-700 to-sky-950 bg-emerald-600`}>
				<nav className={`z-0  basis-full bg-slate-800 pt-4 pb-2 flex w-full flex-col md:hidden`}>
					<h1 className="text-center pb-4">
						caiohygino<span className="font-bold">.software</span>
					</h1>
					<a className="m-2 py-2 px-4 bg-slate-700 flex flex-row justify-between items-center rounded-md" href="#">
						home
						<i className="fa-solid fa-laptop-code "></i>
					</a>
					<a className="m-2 py-2 px-4 bg-slate-700 flex flex-row justify-between items-baseline rounded-md" href="#">
						about
						<i className="fa-solid fa-info-circle "></i>
					</a>
					<a className="m-2 py-2 px-4 bg-slate-700 flex flex-row justify-between items-baseline rounded-md" href="#">
						skills
						<i className="fa-solid fa-code"></i>
					</a>
					<a className="m-2 py-2 px-4 bg-slate-700 flex flex-row justify-between items-baseline rounded-md" href="#">
						projects
						<i className="fa-solid fa-folder-open"></i>
					</a>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
