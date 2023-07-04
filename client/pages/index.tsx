import Home from '@/components/screens/home/Home';
import { VideoService } from '@/services/video/VideoService';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage = () => {
	return <Home />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAllVideos();

		return {
			props: {},
			revalidate: 60,
		};
	} catch (e) {
		return {
			props: {},
			revalidate: 60,
		};
	}
};

export default HomePage;
