import { AVATAR } from 'assets/images';
import {
    BELL,
    CLOCK,
    COMMENT,
    GUIDED_BLUE,
    HEART,
    LANDSCAPE_PRIMARY,
    PinOutlined,
    SIGHTSEEING_BLUE,
    STAR_FILL,
} from 'assets/svgs';
import './styles.scss';

interface GuideCardProps {}

// eslint-disable-next-line no-empty-pattern
export default function GuideCard({}: GuideCardProps) {
    return (
        <div className="guide-card relative">
            <div className="guide-card__type flex">
                <img src={GUIDED_BLUE} alt="" />
                <img src={SIGHTSEEING_BLUE} alt="" />
                <img src={LANDSCAPE_PRIMARY} alt="" />
            </div>
            <h4 className="h4 title uppercase text-white">
                The Chicken Cathedral in Da Nang
            </h4>
            <div className="guide-card__info flex items-center">
                <img className="avatar" src={AVATAR} alt="" />
                <h5 className="h5 text-white">Huy Ong</h5>
            </div>
            <div className="guide-card__reviews flex items-center">
                <div className="review-point flex">
                    <img src={STAR_FILL} alt="" />
                    <img src={STAR_FILL} alt="" />
                    <img src={STAR_FILL} alt="" />
                    <img src={STAR_FILL} alt="" />
                    <img src={STAR_FILL} alt="" />
                </div>
                <span className="text-sm text-white">(1 reviews)</span>
            </div>
            <div className="guide-card__extras text-white text-sm">
                <div className="item">
                    <PinOutlined fill="#FAFBFD" />
                    <span>Canada</span>
                </div>
                <div className="item">
                    <img src={CLOCK} alt="" />
                    <span>08:30 AM</span>
                </div>
                <div className="item">
                    <img src={HEART} alt="" />
                    <span>1920</span>
                </div>
                <div className="item">
                    <img width="12.44px" src={COMMENT} alt="" />
                    <span>English</span>
                </div>
            </div>
            <div className="guide-card__noti bg-secondary absolute">
                <img src={BELL} alt="" />
            </div>
        </div>
    );
}
