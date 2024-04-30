import art01 from "../../assets/art01.jpg";
import art02 from "../../assets/art02.jpg";
import art03 from "../../assets/art03.jpg";
import art04 from "../../assets/art04.jpg";
import { Typewriter } from "react-simple-typewriter";
const Blogs = () => {
  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">
              Exploring the Beauty and{" "}
              <span className="text-orange-500">
                <Typewriter
                  words={["Creativity of Artisanal Creations"]}
                  loop={1}
                  typeSpeed={80}
                  deleteSpeed={100}
                />
              </span>
            </h2>
            <p className="font-serif text-base dark:text-gray-600">
              Engaging with art encourages creativity and fosters innovation.
              Artists push boundaries, experiment with new techniques, and
              challenge conventional thinking, inspiring others to think outside
              the box and explore new possibilities in various fields.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-gray-50 border border-orange-500 p-2 rounded-md">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500 rounded-mds"
                  src={art02}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  CreativePalette
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Crafting Chronicles: Tales of Creativity and Inspiration
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 1, 2023</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500 rounded-md"
                  src={art01}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  ArtisanAvenue
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Artisanal Adventures: Exploring the World of Handmade
                  Creations
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 2, 2023</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50 border border-orange-500 p-2 rounded-md">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500 rounded-md"
                  src={art03}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  CraftyExpressions
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Brushes & Beyond: Unveiling the Magic of Artistic Expression
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>June 3, 2022</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500 rounded-md"
                  src={art04}
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
                >
                  PaletteWhimsy
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Crafting Connections: Bringing Communities Together Through
                  Art and Creativity
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>March 4, 2024</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
