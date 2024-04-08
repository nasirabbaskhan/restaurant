import { PropsWithChildren } from "react";

export default function Wrapper({ children }: PropsWithChildren) {
  return <div className="max-w-[1180px] mx-auto min-h-screen">{children}</div>;
}
