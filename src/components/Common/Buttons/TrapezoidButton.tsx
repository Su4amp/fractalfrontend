import { UnstyledButton } from "@mantine/core";
import classes from "./TrapezoidButton.module.css";

interface TrapezoidButtonProps {
  text: string;
}

export default function TrapezoidButton({ text }: TrapezoidButtonProps) {
  return (
    <div className={classes.paralellogram}>
      <UnstyledButton className="h-10 font-semibold text-white py-2 px-4 border rounded hover:underline">
        {text}
      </UnstyledButton>
    </div>
  );
}
