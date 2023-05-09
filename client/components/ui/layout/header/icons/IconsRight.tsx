import React, { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BsPlusCircleFill } from 'react-icons/bs';

const IconsRight: FC = () => {
	return (
		<div className="icons_right">
			<button>
				<BsPlusCircleFill fill="#cd3a42"></BsPlusCircleFill>
			</button>
			<div>
				<button>
					<FaUserCircle fill="#A4A4A4"></FaUserCircle>
				</button>
			</div>
		</div>
	);
};

export default IconsRight;
