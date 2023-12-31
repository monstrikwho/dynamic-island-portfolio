export default function Hero() {
  return (
    <section className="w-[90%] md:w-4/5 mx-auto h-[calc(100vh-56px-12px)]">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-medium font-inter">
            Welcome to my
            <br />
            <span className="inline-block bg-gradient-to-r from-green-400 via-secondary to-accent font-bold text-transparent bg-clip-text p-2 animate-gradient bg-300% text-5xl md:text-6xl lg:text-7xl py-4">
              Fullstack Developer
            </span>
            <br />
            Portfolio
          </h1>
        </div>
      </div>
    </section>
  );
}
