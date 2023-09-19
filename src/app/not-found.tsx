import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center p-5">
      <h2 className="font-black text-5xl flex md:flex-row flex-col items-center gap-2 leading-tight">
        Sorry, Page Not Found
        <Image alt="" src="https://emojicdn.elk.sh/😔" width={45} height={45} />
      </h2>
      <p className="my-20 flex md:flex-row flex-col items-center gap-2 text-2xl italic font-AdobeGaramond">
        Could not find requested resource on
        <Link href="/">
          <Button
            variant="link"
            className='font-AdobeGaramond italic text-2xl gap-2'
          >
            peggyamaboadi.law
            <Image
              alt=""
              src="https://emojicdn.elk.sh/🔍?style=twitter"
              width={25}
              height={40}
            />
          </Button>
        </Link>
      </p>
      <Link href="/">
        <Button variant="secondary">Return Home</Button>
      </Link>
    </div>
  );
}
