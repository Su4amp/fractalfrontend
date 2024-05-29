import { Text, UnstyledButton } from "@mantine/core";
import classes from "./TrapezoidButton.module.css";

interface TrapezoidButtonProps {
  text: string;
  icon?: React.ReactElement;
  [x: string]: any;
}

export default function TrapezoidButton(props: TrapezoidButtonProps) {
  const { icon, text, ...rest } = props;
  return (
    <div className={classes.paralellogram} {...rest}>
      <UnstyledButton className="flex items-center gap-2 h-10 font-semibold text-white py-2 px-4 border rounded hover:underline cursor-pointer">
        {icon}
        <Text className={classes.text}>{text}</Text>
      </UnstyledButton>
    </div>
  );
}
