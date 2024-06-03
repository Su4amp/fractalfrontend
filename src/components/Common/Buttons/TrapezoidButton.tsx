import { Text, UnstyledButton } from "@mantine/core";
import classes from "./TrapezoidButton.module.css";

interface TrapezoidButtonProps {
  text: string;
  icon?: React.ReactElement;
  [x: string]: unknown;
}

export default function TrapezoidButton(props: TrapezoidButtonProps) {
  const { icon, text, ...rest } = props;

  return (
    <div className={classes.paralellogram} {...rest}>
      <UnstyledButton className="flex items-center gap-2 h-10 font-semibold text-white py-2 px-4 border rounded cursor-pointer">
        {icon && <span className={classes.fixSkew}>{icon}</span>}
        <Text className={classes.fixSkew}>{text}</Text>
      </UnstyledButton>
    </div>
  );
}
