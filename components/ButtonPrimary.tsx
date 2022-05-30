import Button from "./design-system/Button";

const ButtonPrimary: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Button bg="cyan" color="">
      {children}
    </Button>
  );
};

export default ButtonPrimary;
