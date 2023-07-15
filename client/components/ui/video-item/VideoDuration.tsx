import React, { FC, useRef } from 'react';

const VideoDuration: FC<{ videoPath: string }> = ({ videoPath }) => {
	const ref = useRef<HTMLVideoElement>(null);
	return (
		<>
			<video className="hidden" ref={ref}>
				<source src={videoPath} type="video/mp4"></source>
			</video>
			<time>
				{ref.current?.duration &&
					Math.floor(ref.current?.duration / 60) +
						':' +
						('0' + Math.floor(ref.current.duration % 60)).slice(-2)}
			</time>
		</>
	);
};

export default VideoDuration;
