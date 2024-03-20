import pfp from "../assets/blankpfp.webp";

export default function Skills() {
  return (
    <section
      className="max-w-5xl mx-auto rounded-md shadow-lg p-5 my-8 grid grid-cols-1 md:grid-cols-2 gap-5 bg-neutral-600"
      id="about"
    >
      {/* Image Div */}
      <div>
        <img src={pfp} alt="pfp" className="rounded-xl w-auto" />
      </div>

      <div className="md:text-left text-center">
        <div className="my-5">
          <h2 className="text-3xl font-bold mb-2">[Name Here]</h2>
        </div>
        {/* Info #2 */}
        <div className="my-5">
          <h3 className="text-xl font-bold mb-2">💻 Frameworks</h3>
          <p className="text-gray-50">[List of Frameworks]</p>
        </div>
        {/* Info #3 */}
        <div className="my-5">
          <h3 className="text-xl font-bold mb-2">💻 Databases</h3>
          <p className="text-gray-50">[List of Databases]</p>
        </div>
        {/* Info #4 */}
        <div className="my-5">
          <h3 className="text-xl font-bold mb-2">💻 Languages</h3>
          <p className="text-gray-50">[List of Languages]</p>
        </div>
      </div>
    </section>
  );
}
