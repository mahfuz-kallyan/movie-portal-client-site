import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";
import LatestNews from "../Components/LatestNews";
import MoreNews from "../Components/MoreNews";
import Testimonials from "../Components/Testimonials";
import Traffic from "../Components/Traffic";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <MoreNews></MoreNews>
			<LatestNews></LatestNews>
			<Testimonials></Testimonials>
			<Traffic></Traffic>
		</div>
	);
};

export default Home;
