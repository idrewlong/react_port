export default function Contact() {
  return (
    <div>
      <section
        id="contact"
        className="max-w-5xl mx-auto rounded-3xl shadow-lg p-5 my-8 text-center bg-gradient-to-br from-sky-400 to-zinc-600"
      >
        <div className="px-6 py-12 md:px-12">
          <h2 className="my-12 text-4xl md:text-5xl font-bold text-ap_dark_gray">
            Interested in <br /> Working Together?
          </h2>
          <a
            href="mailto:"
            role="button"
            className="mb-2 inline-block rounded bg-gradient-to-br from-neutral-500 to-zinc-900 hover:opacity-90 duration-200 px-8 py-3 font-medium text-white transition md:mr-2 md:mb-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
