import { volumes } from "@/lib/data";
import Book from "../../components/Book";

export default function TheTwoTowersPage() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return <Book volume={volume} />;
}
