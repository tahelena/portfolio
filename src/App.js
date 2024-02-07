import Button from "./components/Button";

const App = () => {
  return (
    <div className="flex flex-wrap gap-4 flex-col">
      <div>
        <span>
          <Button primary onClick={() => console.log("Clicked")}>
            Button Primary
          </Button>
        </span>
        <span>
          <Button secondary onMouseEnter={() => console.log("Mouse enter")}>
            Button Secondary
          </Button>
        </span>
        <span>
          <Button danger>Button Success</Button>
        </span>
        <span>
          <Button warning>Button Warning</Button>
        </span>
        <span>
          <Button success>Button Danger</Button>
        </span>
      </div>
      <div>
        <span>
          <Button primary rounded>
            Button Primary
          </Button>
        </span>
        <span>
          <Button secondary rounded>
            Button Secondary
          </Button>
        </span>
        <span>
          <Button danger rounded>
            Button Success
          </Button>
        </span>
        <span>
          <Button warning rounded>
            Button Warning
          </Button>
        </span>
        <span>
          <Button success rounded>
            Button Danger
          </Button>
        </span>
      </div>
      <div>
        <span>
          <Button primary outline>
            Button Primary
          </Button>
        </span>
        <span>
          <Button secondary outline>
            Button Secondary
          </Button>
        </span>
        <span>
          <Button danger outline>
            Button Success
          </Button>
        </span>
        <span>
          <Button warning outline>
            Button Warning
          </Button>
        </span>
        <span>
          <Button success outline>
            Button Danger
          </Button>
        </span>
      </div>
      <div>
        <span>
          <Button primary rounded outline>
            Button Primary
          </Button>
        </span>
        <span>
          <Button secondary rounded outline>
            Button Secondary
          </Button>
        </span>
        <span>
          <Button danger rounded outline>
            Button Success
          </Button>
        </span>
        <span>
          <Button warning rounded outline>
            Button Warning
          </Button>
        </span>
        <span>
          <Button success rounded outline>
            Button Danger
          </Button>
        </span>
      </div>
    </div>
  );
};

export default App;
