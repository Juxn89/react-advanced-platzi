import { FC } from "react";

type ChildComponentProps = {
  render: (name: string) => JSX.Element
}

export const ChildComponent: FC<ChildComponentProps> = ({ render }) => {
  const name = 'Juan'

  return(
    <div>
      { render(name) }
    </div>
  )
}

export const ParentComponent = () => {
  return (
    <ChildComponent render={ (name) => <p>Hello, { name } !</p> }>
    </ChildComponent>
  );
};