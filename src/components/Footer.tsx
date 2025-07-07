import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[160px] bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="not found" width={24} height={24} />
            <div className="text-2xl tracking-wide">NAHIAN&apos;S</div>
          </Link>
          <p>1400 Naryangonj, Dhaka, Bangladesh</p>
          <span className="font-semibold">Alrafi321@icloud.com</span>
          <span className="font-semibold">+88 017 6118 6858</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h2 className="uppercase font-medium text-lg">Company</h2>
            <div className="flex flex-col gap-6">
              <Link className="capitalize" href="">
                About us
              </Link>
              <Link className="capitalize" href="">
                careers
              </Link>
              <Link className="capitalize" href="">
                affiliates
              </Link>
              <Link className="capitalize" href="">
                blog
              </Link>
              <Link className="capitalize" href="">
                contract us
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h2 className="uppercase font-medium text-lg">shop</h2>
            <div className="flex flex-col gap-6">
              <Link className="capitalize" href="">
                new arrivals
              </Link>
              <Link className="capitalize" href="">
                accessories
              </Link>
              <Link className="capitalize" href="">
                men
              </Link>
              <Link className="capitalize" href="">
                women
              </Link>
              <Link className="capitalize" href="">
                all products
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h2 className="uppercase font-medium text-lg">help</h2>
            <div className="flex flex-col gap-6">
              <Link className="capitalize" href="">
                customer service
              </Link>
              <Link className="capitalize" href="">
                my account
              </Link>
              <Link className="capitalize" href="">
                find a store
              </Link>
              <Link className="capitalize" href="">
                legal & privacy
              </Link>
              <Link className="capitalize" href="">
                gift card
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h2 className="font-medium text-lg uppercase">Subscribe</h2>
          <p className="capitalize">
            Be the first to get the latest news about trends, promotion, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-nahian text-white uppercase">
              join
            </button>
          </div>
          <span className="font-semibold">secure payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 ">
        <div className="uppercase">© 2025 NAHIAN&#39;S</div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | ENGLISH</span>
          </div>

          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">৳ TK | $USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
