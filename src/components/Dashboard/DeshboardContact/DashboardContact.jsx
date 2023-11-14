import './DashboardContact.css'

const DashboardContact = () => {
    return (
        <div className='wrap'>

            <div className="content">
                <div className="image-box">
                <img src="/public/Contact us-pana.png" alt=""/>
                </div>
                <form action="#">
                <div className="input-box">
                    <input type="text" required/>
                    <label>Enter your name</label>
                </div>
                <div className="input-box">
                    <input type="text" required/>
                    <label>Enter your email</label>
                </div>
                <div className="message-box">
                    <textarea></textarea>
                    <label>Enter your massege</label>
                </div>
                <div className="input-box">
                    <input type="submit" value="Send Message"/>
                </div>
                </form>
            </div>
            
        </div>
    );
};

export default DashboardContact;