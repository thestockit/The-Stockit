import Image from 'next/image';
import img02 from '@/public/199736801_528111364899702_5962172630510482343_n-fotor-bg-remover-20240910114832-fotor-bg-remover-2024091012553.765ec470.webp';
import img01 from '@/public/fire logo.webp';
import img03 from '@/public/yasir logo.webp';
import img04 from '@/public/website-logo-1536x323.webp';

const cellLink =
  'flex w-full h-full items-center justify-center bg-gray-100 rounded-lg overflow-hidden';

const MarketingGallery = () => {
  return (
    <div className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="https://www.facebook.com/share/V1iw7PPGaX8GjPDD/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
          className={`${cellLink} aspect-[4/5]`}
        >
          <Image
            width={192}
            height={256}
            className="object-contain w-48 h-64 mx-auto"
            loading="lazy"
            src={img01}
            alt="Client logo featured in a The Stockit social media showcase"
          />
        </a>

        <a
          href="https://www.facebook.com/share/nPED3eZtdF7rwQ84/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
          className={`${cellLink} aspect-square`}
        >
          <Image
            width={128}
            height={128}
            className="object-contain w-32 mx-auto"
            loading="lazy"
            src={img03}
            alt="Client logo featured in a The Stockit social media showcase"
          />
        </a>

        <a
          href="https://www.instagram.com/faikacollection?igsh=dGtnY3d6ejlrcGJ0"
          target="_blank"
          rel="noopener noreferrer"
          className={`${cellLink} aspect-square`}
        >
          <Image
            width={144}
            height={144}
            className="object-contain w-36 mx-auto"
            loading="lazy"
            src={img02}
            alt="Client logo featured in a The Stockit social media showcase"
          />
        </a>

        <a
          href="https://web.facebook.com/profile.php?id=100063944297693&_rdc=1&_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className={`${cellLink} aspect-[4/5]`}
        >
          <Image
            width={192}
            height={256}
            className="object-contain w-48 h-64 mx-auto"
            loading="lazy"
            src={img04}
            alt="Client logo featured in a The Stockit social media showcase"
          />
        </a>
      </div>
    </div>
  );
};

export default MarketingGallery;
