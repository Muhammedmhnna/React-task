
export default function About() {
  return <>
    <div className="bg-primary p-40">
      <div className="container flex justify-center items-center flex-col text-white ">
        <h1 className="uppercase font-bold text-4xl ">about component</h1>
        <div className="flex justify-center items-center gap-3 py-2">
          <div className="w-20 bg-white p-0.5"></div>
          <div>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="w-20 bg-white p-0.5"></div>
        </div>
        <div className="grid grid-cols-2 p-3">
          <div className=" p-4 text-md ">
            <p>Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.</p>
          </div>
          <div className="p-4 text-md ">
            <p>Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  </>
}
