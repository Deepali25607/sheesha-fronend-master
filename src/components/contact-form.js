
import '../assets/style/scss/modules/_input.scss'

const ContectForm = () => {
  return (
    <div className="contactFormCard">
      <div classNames="card--body">
        <form action="">
          <h3>Contact Us</h3>
          <div className="grid__row">
            <div className="grid__col6">
              <div className="input--box">
                <input type="text" placeholder="Name" />
              </div>
            </div>
            <div className="grid__col6">
              <div className="input--box">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="grid__col6">
              <div className="input--box">
                <input type="number" placeholder="Phone" />
              </div>
            </div>
            <div className="grid__col6">
              <div className="input--box">
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="grid__col12">
              <div className="input--box">
                <textarea
                  name=""
                  placeholder="Message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="grid__col12">
              <div className="input--box">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContectForm;
