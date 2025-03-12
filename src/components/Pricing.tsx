const Pricing = () => {
	return (
		<article className="flex flex-col gap-9 p-8 border border-neutral-200 rounded-lg shadow-2xl lg:max-w-[487px] w-full">
			<div className="flex flex-col gap-2 items-center">
				<p className="py-1 px-2.5 border border-green-200 rounded-full bg-green-50 text-center w-fit text-green-700 text-sm leading-[20px]">
					Popular
				</p>
				<h3 className="text-center text-5xl sm:text-6xl leading-[48px] sm:leading-[60px] font-semibold">
					$699
				</h3>
				<p className="text-sm leading-[20px] text-neutral-600">Prices in USD</p>
			</div>
			<p className="text-center text-xl leading-[28px] text-neutral-900">
				Pay once, use it forever.
				<br className="hidden sm:block" /> No strings attached.
			</p>
			<button
				type="button"
				className="text-white bg-indigo-700 px-4 py-2.5 rounded-sm cursor-pointer"
			>
				Buy now
			</button>
		</article>
	);
};

export default Pricing;
