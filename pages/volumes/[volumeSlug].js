import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Volume() {
  const router = useRouter();
  const { volumeSlug } = router.query;

  const volume = volumes.find((volume) => volume.slug === volumeSlug);
  if (!volume) return null;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt="movie cover" width={140} height={230} />
    </>
  );
}
