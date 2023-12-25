import { AlertCircle, BellRing, Info, ThumbsUp, X } from "lucide-react";

import Alert from "./components/Alert/Alert";

const App = () => {
  return (
    <div>
      <Alert
        type={"alert-error"}
        icon={<X />}
        children={
          <p>
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta at laborum quae quam sunt{" "}
            <a href="/">Learn more...</a>
            fugit impedit unde dolore rerum."
          </p>
        }
        title={"error"}
      />
      <Alert
        type={"alert-success"}
        icon={<ThumbsUp />}
        desc={
          "Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!"
        }
        title={"success"}
      />
      <Alert
        type={"alert-warning"}
        icon={<AlertCircle />}
        desc={
          "You can also run the above script in your CI setup to enable automatic deployment on each push."
        }
        title={"warning"}
      />
      <Alert
        type={"alert-info"}
        icon={<Info />}
        desc={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta at laborum quae quam sunt fugit impedit unde dolore rerum."
        }
        title={"info"}
      />
      <Alert
        type={"alert-default"}
        icon={<BellRing />}
        desc={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta at laborum quae quam sunt fugit impedit unde dolore rerum."
        }
        title={"default"}
      />
    </div>
  );
};

export default App;
