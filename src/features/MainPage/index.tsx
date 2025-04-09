import { observer } from "mobx-react";
import { FC, PropsWithChildren } from "react";

const MainPage: FC<PropsWithChildren> = observer(({ children }) => {
  return <div>Главная</div>;
});

export default MainPage;
