const Notification = props => {
  //  Write your code here.
}

const element = (
  //  Write your code here.   
)

ReactDOM.render(element, document.getElementById('root'))
const Notification = (props) => {
  //  Write your code here.
  const { a, b, c } = props;
  return (
    <div className={a}>
      <img className="p" src={c} />
      <p className="l">{b}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Notifications</h1>
    <Notification
      a="ok"
      b="Success Notification"
      c="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      a="ok"
      b="Success Notification"
      c="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      a="ok"
      b="Success Notification"
      c="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      a="ok"
      b="Success Notification"
      c="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));