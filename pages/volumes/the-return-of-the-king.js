import { volumes } from "@/lib/data";
import Book from "../../components/Book";

export default function TheReturnOfTheKingPage() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return <Book volume={volume} />;
}
