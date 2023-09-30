import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/header";

import Trollface from "/public/Trollface_non-free.png";

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <section>
                <div className='content container'>
                    <h2>Your program</h2>
                    <p>
                        The program contains 12 modules. All modules are filled
                        with interactive coding challenges to ensure that you
                        don`t fall off the wagon. You`ll learn HTML, CSS,
                        JavaScript, React, UI design, career strategy, and more.
                    </p>
                    <div className='module'>
                        <h3>Module 1 - Welcome to the career path</h3>
                        <span>- 10 lessons - 25 min</span>
                    </div>
                    <div className='module'>
                        <h3>Module 2 - Web dev basics</h3>
                        <span>- 99 lessons - 5 hours 14 min</span>
                    </div>
                    <div className='module'>
                        <h3>Module 3 - Making websites interactive</h3>
                        <span>– 209 lessons - 10 hours 21 min</span>
                    </div>
                    <div className='module'>
                        <h3>Module 4 - Essential CSS concepts</h3>
                        <span>– 64 lessons - 3 hours 56 min</span>
                    </div>
                    <div className='module'>
                        <h3>Module 5 - Essential JavaScript concepts</h3>
                        <span>– 150 lessons - 9 hours 58 min</span>
                    </div>
                </div>
            </section>

			<img className="trollface" src={Trollface} alt="" />
        </>
    );
}

export default App;
