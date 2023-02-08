export default function Ask() {
	return (
		<div className="bg-neutral-900 h-screen">
			<div className="flex flex-col items-center max-w-md m-auto">
				<section className="mt-36 text-center">
					<h2 className="text-white mb-8 text-3xl font-bold tracking-wider">
						Ask Me
					</h2>
					<article className="w-96">
						<textarea
							name=""
							id=""
							rows={5}
							className="outline-none rounded p-3 w-full font-semibold bg-stone-700 text-white"
							placeholder="Write Comments..."
						/>
						<div className="flex gap-4 justify-end mt-4">
							<input
								type="password"
								className="rounded p-2 outline-none "
								placeholder="password"
							/>
							<button className="bg-slate-600 text-yellow-300 font-bold px-4 py-2 rounded ">
								Ask
							</button>
						</div>
					</article>
				</section>
				<section className="mt-16 w-full">
					<article className="w-full bg-white rounded">
						<p className="h-36 p-4 mx-4 flex items-center">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Cupiditate sequi dicta quidem natus minima velit, dignissimos
							ipsum perspiciatis, laboriosam facere recusandae, eum animi ex!
							Itaque neque odit blanditiis sed at.
						</p>
						{/* <textarea
							name=""
							id=""
							rows={5}
							className="outline-none rounded p-3 my-3 w-full font-semibold bg-stone-700 text-white"
							placeholder="Write Comment..."
						/> */}
					</article>
				</section>
			</div>
		</div>
	);
}
