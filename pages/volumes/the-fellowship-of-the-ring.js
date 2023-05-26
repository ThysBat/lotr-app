import { volumes } from "@/lib/data";
import Book from "../../components/Book";

export default function TheFellowshipOfTheRingPage() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return <Book volume={volume} />;
}
