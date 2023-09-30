import "./header.scss";

const Header = () => {
    return (
        <header className='header'>
            <div className='blobs'>
                <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fill='#FFD6E8'
                        d='M43.5,-77.9C55.4,-68.6,63.1,-54.8,68.2,-41C73.4,-27.3,75.9,-13.6,74.5,-0.8C73,12,67.7,24,59.8,33C52,42,41.6,48,31.2,51.2C20.8,54.4,10.4,54.7,-2.1,58.3C-14.5,61.9,-29.1,68.7,-40.7,66.2C-52.4,63.8,-61.2,52.1,-68.4,39.5C-75.6,27,-81.2,13.5,-78,1.8C-74.8,-9.8,-62.8,-19.6,-53.1,-27.8C-43.4,-36.1,-36.1,-42.9,-27.6,-54.1C-19.1,-65.3,-9.6,-81,3.2,-86.5C15.9,-92,31.7,-87.2,43.5,-77.9Z'
                        transform='translate(100 100)'
                    />
                </svg>
                <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fill='#9EF0F0'
                        d='M41.5,-72.3C54.5,-64.5,66,-54.6,70.2,-42.2C74.3,-29.9,71.1,-14.9,67.2,-2.3C63.3,10.4,58.7,20.8,54.8,33.7C50.9,46.6,47.8,62,38.8,70.5C29.8,78.9,14.9,80.6,0.4,79.9C-14.1,79.2,-28.2,76.3,-36.5,67.4C-44.7,58.4,-47.1,43.5,-51.3,31.2C-55.6,19,-61.8,9.5,-67.4,-3.2C-72.9,-15.9,-77.7,-31.8,-74.5,-45.8C-71.2,-59.8,-59.9,-72,-46.1,-79.3C-32.4,-86.7,-16.2,-89.3,-0.9,-87.6C14.3,-86,28.6,-80.1,41.5,-72.3Z'
                        transform='translate(100 100)'
                    />
                </svg>
            </div>
            <div className='title-container container'>
                <div className='title-head'>
                    <div className='title'>
                        <h1>The Ultimate Developer Career Path</h1>
                    </div>
                    <div className='description'>
                        <p>
                            This career path will turn you into a hireable
                            gigachad developer, and teach you how to nail the
                            job interview. It contains over 70 hours of
                            top-notch tutorials, hundreds of coding challenges,
                            and dozens of real-world projects.
                        </p>
                    </div>
                </div>
                <div className='cta-wrapper'>
                    <div className='cta-container'>
                        <div>
                            <div className='cta'>
                                <button>Get Started</button>
                                <p>Join 2145 other students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
