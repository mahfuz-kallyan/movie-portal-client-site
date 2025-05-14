import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";
import LatestNews from "../Components/LatestNews";
import SignUp from "../Components/SignUp";
import Traffic from "../Components/Traffic";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<FeaturedMovies></FeaturedMovies>
			<Traffic></Traffic>
			<LatestNews></LatestNews>
			<SignUp></SignUp>
		</div>
	);
};

export default Home;
