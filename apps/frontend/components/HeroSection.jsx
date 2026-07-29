import Link from "next/link";

export default function HeroSection() {
  return (
    <div className='grid grid-cols-2 m-10 gap-16'>
      <div className='flex flex-col items-start justify-center gap-10'>
        <h1 className='text-5xl font-semibold font-serif'>فروشگاه مکس بکس</h1>
        <p className='text-xl text-gray-500'>
          بهترین محصولات را با قیمتی باور نکردنی خریداری کنید. همین حالا
          مجموعه‌ای از کالاهای متنوع را بررسی کرده و تجربه خریدی متفاوت را احساس
          کنید .
        </p>
        <Link
          href={"/products"}
          className='bg-blue-400 cursor-pointer duration-150 text-gray-100 hover:bg-blue-500 py-3 px-4 rounded-md'>
          مشاهده محصولات
        </Link>
      </div>
      <div>
        <img
          src='/images/maxbax.png'
          alt='hero section img'
          className='w-150 h-80 rounded-lg'
        />
      </div>
    </div>
  );
}
