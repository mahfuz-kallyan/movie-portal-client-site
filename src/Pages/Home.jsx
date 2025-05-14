import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";
import LatestNews from "../Components/LatestNews";
import MoreNews from "../Components/MoreNews";
import SignUp from "../Components/SignUp";
import Traffic from "../Components/Traffic";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <MoreNews></MoreNews>
			<Traffic></Traffic>
			<LatestNews></LatestNews>
			<SignUp></SignUp>
		</div>
	);
};

export default Home;
