import Description from './components/Description';
import Header from './components/Header';
import Pricing from './components/Pricing';

const App = () => {
	return (
		<div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] w-screen h-screen p-4">
			<main className="bg-white w-full h-full px-3 sm:px-4 py-12 flex flex-col gap-16">
				<Header />
				<section className="flex flex-col gap-12 lg:flex-row lg:items-center justify-between">
					<Description />
					<Pricing />
				</section>
			</main>
		</div>
	);
};

export default App;
