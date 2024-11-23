import logo from "../../assets/avataaars.svg"
export default function Home() {
  return (
    <>
      <div className="bg-primary">
        <div className="container flex items-center justify-center flex-col py-20 text-white">
          <img src={logo} alt="" className="w-1/5" />
          <h1 className="text-4xl uppercase font-bold py-4">start framework</h1>
          <div className="flex items-center gap-3 pb-2">
            <div className="w-20 bg-white p-0.5"></div>
            <div>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="w-20 bg-white p-0.5"></div>
          </div>
          <p >Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  )
}
