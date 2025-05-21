import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
	{
		name: "Alice Johnson",
		role: "Product Designer",
		text: "This platform transformed the way I collaborate with my team. The UI is sleek and user-friendly!",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "Mark Smith",
		role: "Software Engineer",
		text: "Excellent features and reliable support. It’s a game changer for developers.",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Sara Lee",
		role: "Project Manager",
		text: "Managing projects has never been easier. Highly recommended for any agile team!",
		image: "https://randomuser.me/api/portraits/women/65.jpg",
	},
];

const Testimonials = () => {
    const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
	};

	return (
		<section className="bg-gray-50 py-12 px-4">
			<div className="max-w-3xl mx-auto text-center mb-8">
				<h2 className="text-4xl font-semibold mb-2">What Our Users Say</h2>
			</div>

			<div className="max-w-4xl mx-auto">
				<Slider {...settings}>
					{testimonials.map((t, index) => (
						<div key={index} className="px-6">
							<div className="bg-white shadow-lg rounded-2xl p-8 text-center relative">
								<FaQuoteLeft className="text-sky-500 text-3xl absolute top-4 left-4" />
								<p className="text-gray-700 italic mb-6">
									{t.text}
								</p>
								<div className="flex flex-col items-center">
									<img
										src={t.image}
										alt={t.name}
										className="w-16 h-16 rounded-full object-cover mb-2"
									/>
									<h4 className="text-lg font-semibold">
										{t.name}
									</h4>
									<span className="text-sm text-gray-500">
										{t.role}
									</span>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonials;