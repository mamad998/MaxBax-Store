import ClientSide from "./clientSide";

export function generateMetadata() {
  return {
    title: "Home | Cart | Your online cart.",
    description: "Browse amazing cart Products ...",
    openGraph: {
      title: "Home | Cart | Your online cart.",
      description: "Browse amazing cart Products ...",
    },
  };
}
export default function Cart() {
  return <ClientSide />;
}
