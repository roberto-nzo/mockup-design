import Navs from "./components/Navs";
import IconSlider from "./components/IconSlider";

function App() {
  return (
    <div className="container">

      {/* <div className='menu-btn'>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div> */}

      <div className="content">

        <div className="side-bar">

          <div className="profile">
            <div className="profile-branding">
              <div className="portrait">

              </div>
            </div>
            <div className="description">
              <div className="name-id">
                <p>Roberto Nzohabonayo</p>
                <p>ID: 20185281</p>
              </div>
              <div className="view-profile">
                <div className="view"><a href="">View Profile</a></div>
              </div>
            </div>
          </div>

          <div className="side-links">

            <Navs />

          </div>
        </div>
        <div className="options">
          <div className="balance-loan">
            <div className="wallet">
              <div className="wallet-date">
                <p>YOUR WALLET</p>
                <p>Feb 2, 2021</p>
              </div>
              <div className="wallet-balance">
                <p>Wallet Balance</p>
                <p className="dollar">$ 14.61</p>
              </div>
              <div className="wallet-icons">
                <div className="name-icon">
                  <i class="fa fa-suitcase" aria-hidden="true"></i>
                  <p>Withdraw</p>
                </div>
                <div className="name-icon">
                  <i class="fab fa-google-wallet" aria-hidden="true"></i>
                  <p>Fund Wallet</p>
                </div>
                <div className="name-icon">
                  <i class="fa fa-exchange" aria-hidden="true"></i>
                  <p>Transactions</p>
                </div>
              </div>
            </div>
            <div className="loan">
              <div className="needCash">
                <p>Need cash instantly?</p>
              </div>
              <div className="apply-loan">
                <a href="">Apply for a loan</a>
              </div>
            </div>
          </div>

          <div className="make-payment">
            <div className="make-pay">
              <p>MAKE PAYMENT</p>
              <i class="fa fa-info"></i>
            </div>

            <IconSlider />

          </div>

          <div className="food-product">
            <div className="chocolate">
              <div className="food-img"></div>
              <div style={{ flexGrow: 8 }}>Chocolate Cake</div>
              <div style={{ flexGrow: 2 }}>Cakes</div>
              <div style={{ flexGrow: 2 }}>09.04.2018</div>
              <div className="chocolate-processed" style={{ flexGrow: 2 }}>
                <p>PROCESSED</p>
              </div>
              <div className="chocolate-check" style={{ flexGrow: 0, textAlign: 'center' }}>
                <input type="checkbox"></input>
              </div>
            </div>
            <div className="cheesecake">
              <div className="food-img">
              </div>
              <div style={{ flexGrow: 8 }}>Cheesecake</div>
              <div style={{ flexGrow: 2 }}>Cupcakes</div>
              <div style={{ flexGrow: 2 }}>09.04.2018</div>
              <div className="cheese-hold" style={{ flexGrow: 2 }}>
                <p>ON HOLD</p>
              </div>
              <div className="cheesecake-check" style={{ flexGrow: 0, textAlign: 'center' }}>
                <input type="checkbox"></input>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
