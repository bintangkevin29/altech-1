import Button from "./button.component";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <span className="header__title">DEMO Streaming</span>
        <div className="header__buttons">
          <Button className="header__button" buttonLink>
            Log In
          </Button>
          <Button className="header__button">Start Your Free Trial</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
