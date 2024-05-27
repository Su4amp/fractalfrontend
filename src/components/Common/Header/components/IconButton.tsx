import { Image, UnstyledButton } from "@mantine/core";

interface IconButtonProps {
  icon: string;
}

export default function IconButton({ icon }: IconButtonProps) {
  return (
    <UnstyledButton className="hover:brightness-150">
      <Image src={icon} />
    </UnstyledButton>
  );
}
