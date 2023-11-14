import './DashboardAbout.css'
const DashboardAbout = () => {
    return (
        <div>

            <section className="about-us">
                <div className="about">
                <img src="/public/site-rafiki.png" className="pic"/>
                <div className="text">
                    <h5>Front-end Developer & <span className='spans'>Designer</span></h5>
                    <p>Mauris Mattis Auctor Cursus. Phasellus Tellus Tellus, Imperdiet Ut Imperdiet Eu, Iaculis A Sem. Donec Vehicula Luctus Nunc In Laoreet. Aliquam Erat Volutpat. Suspendisse Vulputate Porttitor Condimentum. Proin Viverra Orci A Leo Suscipit Placerat.</p>
                    <div className="data">
                    <a href="#" className="hire">Hire Me</a>
                    </div>
                </div>
                </div>
            </section>
            
        </div>
    );
};

export default DashboardAbout;