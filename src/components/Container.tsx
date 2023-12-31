type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="container max-w-2xl mx-auto px-4">{children}</div>;
}

export default Container;