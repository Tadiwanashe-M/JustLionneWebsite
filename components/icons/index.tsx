import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

function IconBase({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-6", className)}
      {...props}
    />
  );
}

export function IconShield(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M12 3.2 20 6.9v6.3c0 4.6-3.1 8.3-8 9.6-4.9-1.3-8-5-8-9.6V6.9L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 12.2l2 2L15.7 9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M3.5 6.5h10v10h-10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 10h3.2l3.8 3.8V16.5h-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 18.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17 18.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </IconBase>
  );
}

export function IconPickaxe(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M6.2 9.2c2.1-2 5.6-2 7.7 0l1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 7c3.5-3.5 9.2-3.5 12.7 0l3.3 3.3-1.4 1.4-3.3-3.3c-2.7-2.7-7.2-2.7-9.9 0L4 9.8 2.6 8.4 4 7Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M10.6 10.6 5 16.2c-.8.8-.8 2.1 0 2.9.8.8 2.1.8 2.9 0l5.6-5.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M13 2 4.8 13.2H11L9.8 22 19 10.8h-6.2L13 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </IconBase>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <IconBase {...props}>
      <path
        d="M8.3 11.4 6 9.1c-.9-.9-.9-2.4 0-3.3.9-.9 2.4-.9 3.3 0l1.1 1.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7 11.4 18 9.1c.9-.9.9-2.4 0-3.3-.9-.9-2.4-.9-3.3 0l-1.1 1.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.4l2.1 2.1c1.1 1.1 2.8 1.1 3.9 0L16 12.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.5 8.6 16c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l1-1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.5 15.4 16c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0l-1-1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

