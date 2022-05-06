import { Link, useNavigate } from 'react-router-dom';

import Button from 'components/Button';

import './styles.scss';
import { AVATAR, CARD_IMAGE_2 } from 'assets/images';
import { memo } from 'react';
import { EditOutlined, PinOutlined } from 'assets/svgs';

interface ReviewTourCardProps {
    editable?: boolean;
    buttonText?: string;
    type?: 'review' | 'jumpin';
}

export default memo(function ReviewTourCard({
    buttonText = 'review',
    type = 'review',
    editable,
}: ReviewTourCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className="review-tour-card flex overflow-hidden"
            onClick={() => {
                navigate('/tours/tour');
            }}
        >
            <div
                className="review-tour-card__image relative"
                style={{
                    background: `url(${CARD_IMAGE_2}) center no-repeat`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className="review-tour-card__info flex-1 flex items-start justify-between">
                <div className="text-dark">
                    <div className="info-group flex">
                        <img className="avatar" src={AVATAR} alt="" />
                        <div className="overflow-hidden">
                            <h5 className="h5">Apostolis Karajanis</h5>
                            <Link
                                to="/"
                                className="location text-sm flex items-center"
                            >
                                <PinOutlined fill="#2E65BA" />
                                <p className="truncate mb-0">
                                    Discover Ohrid - UNESCO city
                                </p>
                            </Link>
                        </div>
                    </div>
                    <p className="text-sm">Mar 11, 2022 5:30 PM</p>
                    <p className="text-sm">Riding bike around Discover Ohrid</p>
                </div>
                <Button
                    className="uppercase"
                    type={type === 'review' ? 'secondary' : 'info'}
                    variant="outlined"
                >
                    {buttonText}
                </Button>
            </div>
            {editable && (
                <span className="edit-icon absolute">
                    <EditOutlined fill="#2E65BA" />
                </span>
            )}
        </div>
    );
});
