import react from 'react';
import YouTube from 'react-youtube';
import './AboutUsVideo.scss';


function AboutUsVideo() {
	const opts = {
		height: '595',
    width: '100%',
		playerVars: '1',
	}
	return (
		<section className='about-us-video'>
			<YouTube videoId='v=64KAAl2Uz5g' opts={opts} />
		</section>
	)
}

export default AboutUsVideo;