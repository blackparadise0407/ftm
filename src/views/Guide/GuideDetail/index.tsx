import { BANNER_3 } from 'assets/images';
import { CALENDAR, HEART, PIN, USER } from 'assets/svgs';
import { Button, ProfileInfo, TourCard } from 'components';

import './styles.scss';

export default function GuideDetail() {
    return (
        <div className="guide-detail">
            <div
                className="guide-detail__banner"
                style={{
                    background: `url(${BANNER_3}) center no-repeat`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className="container">
                <div className="guide-detail__main flex">
                    <div className="main">
                        <div className="info flex">
                            <div className="wrapper">
                                <div className="avatar-wrapper">
                                    <img
                                        src="https://i.pravatar.cc/200"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="extra-info">
                                <h3 className="h3 name">Patrick Twomey</h3>
                                <div className="item-list flex">
                                    <div className="item">
                                        <img src={USER} alt="" />
                                        <span>197 Followers</span>
                                    </div>
                                    <div className="item">
                                        <img src={HEART} alt="" />
                                        <span>1920</span>
                                    </div>
                                    <div className="item">
                                        <img src={PIN} alt="" />
                                        <span>Canada</span>
                                    </div>
                                    <div className="item">
                                        <img
                                            width="12.44px"
                                            src={CALENDAR}
                                            alt=""
                                        />
                                        <span>Joined Feb 2022</span>
                                    </div>
                                </div>
                                <div className="action-list flex">
                                    <Button
                                        icon={
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19.0911 10.5416C19.0984 8.66648 18.3617 6.865 17.0426 5.53226C15.7235 4.19951 13.9297 3.4443 12.0546 3.43224H11.9999C10.1176 3.43707 8.31396 4.18822 6.98463 5.52097C5.6553 6.85371 4.90878 8.65925 4.90879 10.5416C4.90879 13.7135 4.25254 15.5091 3.69655 16.457C3.58285 16.652 3.52295 16.8738 3.52295 17.0996C3.52295 17.3253 3.58285 17.5471 3.69655 17.7421C3.80618 17.9377 3.96643 18.1001 4.16048 18.2124C4.35454 18.3247 4.57524 18.3826 4.79942 18.3802H8.5364V18.5625C8.5364 19.481 8.9013 20.362 9.55085 21.0115C10.2004 21.6611 11.0814 22.026 11.9999 22.026C12.9185 22.026 13.7995 21.6611 14.449 21.0115C15.0986 20.362 15.4635 19.481 15.4635 18.5625V18.3802H19.2005C19.4246 18.3826 19.6453 18.3247 19.8394 18.2124C20.0335 18.1001 20.1937 17.9377 20.3033 17.7421C20.417 17.5471 20.4769 17.3253 20.4769 17.0996C20.4769 16.8738 20.417 16.652 20.3033 16.457C19.7473 15.5091 19.0911 13.7135 19.0911 10.5416ZM14.3697 18.5625C14.3697 19.191 14.1201 19.7937 13.6756 20.2381C13.2312 20.6826 12.6284 20.9322 11.9999 20.9322C11.3714 20.9322 10.7687 20.6826 10.3242 20.2381C9.87982 19.7937 9.63015 19.191 9.63015 18.5625V18.3802H14.3697V18.5625ZM19.3554 17.1953C19.3413 17.2239 19.3191 17.2478 19.2915 17.2639C19.264 17.2801 19.2324 17.2879 19.2005 17.2864H4.79942C4.76752 17.2879 4.73587 17.2801 4.70835 17.2639C4.68082 17.2478 4.65862 17.2239 4.64447 17.1953C4.62847 17.1676 4.62004 17.1361 4.62004 17.1041C4.62004 17.0721 4.62847 17.0407 4.64447 17.013C5.26426 15.9466 6.00254 13.9596 6.00254 10.5416C6.00134 9.75283 6.15552 8.97153 6.45627 8.24233C6.75702 7.51313 7.19845 6.85031 7.75536 6.2917C8.31227 5.7331 8.97375 5.28966 9.70204 4.9867C10.4303 4.68374 11.2112 4.52719 11.9999 4.52599H12.0455C12.8309 4.52726 13.6082 4.68418 14.3325 4.98768C15.0569 5.29119 15.7139 5.73526 16.2656 6.29422C17.3786 7.42741 18.0007 8.95325 17.9973 10.5416C17.9973 13.9596 18.7356 15.9466 19.3554 17.013C19.3714 17.0407 19.3798 17.0721 19.3798 17.1041C19.3798 17.1361 19.3714 17.1676 19.3554 17.1953ZM20.7499 6.85021C20.6756 6.88463 20.5949 6.90326 20.513 6.9049C20.4108 6.90669 20.3103 6.87935 20.2231 6.82608C20.136 6.77282 20.0658 6.69583 20.0208 6.60412C19.2899 5.1186 18.1601 3.86573 16.7578 2.98563C16.6973 2.94677 16.645 2.89637 16.604 2.8373C16.563 2.77823 16.5341 2.71166 16.5188 2.6414C16.5036 2.57113 16.5024 2.49855 16.5152 2.42781C16.5281 2.35706 16.5547 2.28955 16.5937 2.22912C16.631 2.16819 16.68 2.1153 16.7379 2.07352C16.7958 2.03174 16.8615 2.00192 16.9311 1.9858C17.0007 1.96968 17.0727 1.96758 17.1431 1.97962C17.2135 1.99167 17.2808 2.01761 17.3411 2.05594C18.9127 3.0459 20.1782 4.45335 20.996 6.12105C21.0286 6.18492 21.0481 6.25466 21.0534 6.32617C21.0586 6.39768 21.0495 6.46952 21.0266 6.53746C21.0036 6.6054 20.9674 6.66807 20.9199 6.72178C20.8723 6.77549 20.8146 6.81916 20.7499 6.85021ZM3.48691 6.9049C3.40499 6.90326 3.3243 6.88463 3.24994 6.85021C3.1853 6.81916 3.12753 6.77549 3.08003 6.72178C3.03252 6.66807 2.99623 6.6054 2.9733 6.53746C2.95038 6.46952 2.94126 6.39768 2.94651 6.32617C2.95175 6.25466 2.97125 6.18492 3.00384 6.12105C3.8217 4.45335 5.08714 3.0459 6.65879 2.05594C6.71905 2.01761 6.78634 1.99167 6.85674 1.97962C6.92714 1.96758 6.99923 1.96968 7.0688 1.9858C7.13838 2.00192 7.20405 2.03174 7.26198 2.07352C7.3199 2.1153 7.36893 2.16819 7.40619 2.22912C7.44515 2.28955 7.47182 2.35706 7.48466 2.42781C7.49751 2.49855 7.49627 2.57113 7.48103 2.6414C7.4658 2.71166 7.43685 2.77823 7.39586 2.8373C7.35486 2.89637 7.30262 2.94677 7.24213 2.98563C5.83983 3.86573 4.71003 5.1186 3.9791 6.60412C3.9341 6.69583 3.86391 6.77282 3.77675 6.82608C3.68958 6.87935 3.58905 6.90669 3.48691 6.9049Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        }
                                        size="small"
                                    >
                                        Follow
                                    </Button>
                                    <Button
                                        icon={
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15 6.66675C16.3807 6.66675 17.5 5.54746 17.5 4.16675C17.5 2.78604 16.3807 1.66675 15 1.66675C13.6193 1.66675 12.5 2.78604 12.5 4.16675C12.5 5.54746 13.6193 6.66675 15 6.66675Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4525 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4525 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M7.1582 11.2583L12.8499 14.575"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M12.8415 5.42505L7.1582 8.74172"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        }
                                        size="small"
                                        variant="outlined"
                                    >
                                        Share
                                    </Button>
                                    <Button
                                        icon={
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_99_1837)">
                                                    <path
                                                        d="M9.99987 3.43506L9.10362 2.51381C6.99987 0.351311 3.14237 1.09756 1.74987 3.81631C1.09612 5.09506 0.948619 6.94131 2.14237 9.29756C3.29237 11.5663 5.68487 14.2838 9.99987 17.2438C14.3149 14.2838 16.7061 11.5663 17.8574 9.29756C19.0511 6.94006 18.9049 5.09506 18.2499 3.81631C16.8574 1.09756 12.9999 0.350061 10.8961 2.51256L9.99987 3.43506ZM9.99987 18.7501C-9.16638 6.08506 4.09862 -3.79994 9.77987 1.42881C9.85487 1.49756 9.92862 1.56881 9.99987 1.64256C10.0704 1.56888 10.1438 1.49799 10.2199 1.43006C15.8999 -3.80244 29.1661 6.08381 9.99987 18.7501Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_99_1837">
                                                        <rect
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        }
                                        size="small"
                                    >
                                        Heart
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="article">
                            <h2 className="title h2 text-secondary capitalize">
                                <span>“</span> <br /> Experience Paris with the
                                finest local guides
                            </h2>
                            <h5 className="h5">About</h5>
                            <p className="text-base">
                                Based in the majestic Canadian Rockies, I am an
                                international tour guide / tour operator and
                                published author. I have led hundreds of tours
                                to over 40 countries. At home in Banff, I
                                continue to bike, ski, climb and hike. My
                                creative outlet is writing blogs on
                                2metours.com. With Irish roots, my humour shines
                                through and I love connecting with people around
                                the world. I am fluent in English, French and
                                Spanish.
                            </p>
                        </div>
                        <div className="related-tour">
                            <h3 className="h3 text-secondary">
                                Patrick Twomey
                            </h3>
                            <div className="tour-list flex">
                                <TourCard />
                                <TourCard />
                            </div>
                        </div>
                    </div>
                    <div className="side flex-1">
                        <h5 className="h5 capitalize">People also viewed</h5>
                        <div className="also-view flex flex-col">
                            <ProfileInfo size="small" isCard />
                            <ProfileInfo size="small" isCard />
                            <ProfileInfo size="small" isCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
