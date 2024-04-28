const Faq = () => {
  return (
    <div className="flex flex-col md:flex-row items-center border border-orange-500 rounded-md p-5 my-5">
      <div className="space-y-4 md:w-[50%]">
        <p className="text-3xl font-bold text-orange-500">
          Frequently Asked Question
        </p>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What materials do I need to start a particular craft project?
          </div>
          <div className="collapse-content">
            <p>
              For most craft projects, you'll typically need basic supplies like
              paper, scissors, glue, and markers. Specific materials vary based
              on the craft type; for example, painting requires paint, brushes,
              and canvas, while sewing needs fabric, needles, and thread.
              Researching your chosen craft ensures you have the necessary
              materials.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can you provide step-by-step instructions or tutorials for this
            craft?
          </div>
          <div className="collapse-content">
            <p>
              Certainly! Step-by-step tutorials for pencil drawing crafts are
              readily available online. Websites, blogs, and video platforms
              offer comprehensive guides, from beginner basics to advanced
              techniques. Seek tutorials covering topics like sketching,
              shading, and perspective to hone your pencil drawing skills
              effectively.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Where can I find inspiration for my next art or craft project?
          </div>
          <div className="collapse-content">
            <p>
              Inspiration for art and craft projects can be found everywhere:
              nature, books, museums, and online platforms like Pinterest and
              Instagram. Additionally, exploring local art communities,
              attending workshops, or trying new techniques can spark creativity
              and offer fresh ideas for your next project.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer tips for beginners looking to improve their crafting
            skills?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! Many resources provide valuable tips for beginners
              seeking to enhance their crafting skills. Look for
              beginner-friendly guides, online tutorials, and community forums
              tailored to your craft of interest. Practice regularly, be patient
              with yourself, and don't hesitate to ask for advice or feedback
              from experienced crafters.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are there any upcoming workshops, events, or exhibitions in my area
            related to art and craft?
          </div>
          <div className="collapse-content">
            <p>
              Stay updated on art and craft events in your area by checking
              local community centers, art galleries, and event listing
              websites. Social media platforms and craft-focused groups often
              share information about workshops, exhibitions, and events. Don't
              hesitate to reach out to local artisans or organizations for
              updates.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[50%]">
        <section className="p-6 dark:text-gray-800">
          <form
            noValidate=""
            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50"
          >
            <h2 className="w-full text-3xl font-bold leading-tight text-orange-500">
              Contact us
            </h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1 text-left">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required=""
                className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1 text-left">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required=""
                className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ml-1 text-left">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                placeholder="Message..."
                className="block w-full p-2 border rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Faq;
