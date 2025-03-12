const Header = () => {
	return (
		<header className="flex flex-col items-center gap-5">
			<div className="flex flex-col items-center gap-3">
				<p className="font-semibold text-indigo-700">One time purchase</p>
				<h1 className="font-semibold text-neutral-900 text-3xl sm:text-5xl">
					Pay as you need
				</h1>
			</div>
			<p className="text-center text-neutral-600 text-lg sm:text-xl leading-[28px]">
				We offer one-time purchases with credits, for you to use as needed.
				Always active.
			</p>
		</header>
	);
};

export default Header;
