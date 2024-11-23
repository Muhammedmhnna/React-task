
export default function Footer() {
  return <>
    <footer className=" bg-secondary-50">
      <div className="container text-white ">
        <div className="grid grid-cols-3">
          <div className="p-20 flex flex-col justify-center items-center">
            <h2 className="uppercase text-3xl font-semibold">location</h2>
            <p className="my-2">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="p-30 flex justify-center items-center flex-col">
            <h2 className="uppercase text-3xl font-semibold">around the web</h2>

            <ul className="flex gap-2 py-3 justify-center items-center">
              <li><i className="fa-brands fa-facebook p-2 rounded-full border border-1 border-white text-xl"></i></li>
              <li><i className="fa-brands fa-twitter p-2 rounded-full border border-1 border-white text-xl"></i></li>
              <li><i className="fa-brands fa-linkedin p-2 rounded-full border border-1 border-white text-xl"></i></li>
              <li><i className="fa-solid fa-globe p-2 rounded-full border border-1 border-white text-xl"></i></li>
            </ul>



          </div>
          <div className="p-12 flex flex-col justify-center items-center">
            <h2 className="uppercase text-3xl font-semibold">about freelance</h2>
            <p className="text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary-100 p-6">
        <p className="text-white text-center">Copyright © Your Website 2021</p>
      </div>
    </footer>
  </>
}
