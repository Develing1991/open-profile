import { BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs';

import { FaMoon } from 'react-icons/fa';

export default function Main() {
	return (
		<section className="bg-main bg-cover bg-no-repeat w-full h-full flex flex-col justify-center items-center  ">
			<FaMoon className="w-14 h-14 text-yellow-300 absolute top-20 right-1/4  border-yellow-200 hover:cursor-pointer max-md:12 max-sm:w-10 transition-all" />
			<div className="text-white flex flex-col gap-4">
				<em className="text-xs text-orange-300 not-italic tracking-wider font-bold  xl:text-lg lg:text-base md:text-sm sm:text-xs max-sm:p-4  transition-all duration-1000">
					Wellcome to my...
				</em>
				<h2 className="text-3xl text-orange-200 font-semibold tracking-widest xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl max-sm:p-4  transition-all duration-1000 drop-shadow-lg ">
					Develling1991
				</h2>
				<div className="flex mt-6 justify-center gap-10 text-2xl max-sm:text-xl transition-all max-sm:gap-5 text-orange-200">
					<div className="p-2 hover:text-cyan-500 hover:scale-110 hover:cursor-pointer">
						<BsGithub />
					</div>
					<div className="p-2 hover:text-blue-500 hover:scale-110 hover:cursor-pointer">
						<BsFacebook />
					</div>
					<div className="p-2 hover:text-pink-500 hover:scale-110 hover:cursor-pointer">
						<BsInstagram />
					</div>
				</div>
			</div>
		</section>
	);
}
