import { Link } from "react-router";

export default function Dashboard() {
  return (
    <section className="py-2 space-y-5">
      <div className="space-y-3">
        <div className="space-y-2.5">
          <h1 className="font-semibold text-2xl">Hallo, Jeanice!</h1>
          <p className="text-xs">Statistik seminggu terakhir</p>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          <div className="row-span-2 shadow p-4 rounded-md bg-white ring-1 ring-slate-300 text-xs space-y-2 flex flex-col justify-center items-center">
            <div>
              <h2 className="font-semibold text-4xl text-green-500">
                2200 <span className="text-sm">Kkl</span>
              </h2>
            </div>
            <p className="font-semibold">Kalori harian diperlukan</p>
          </div>
          <div className="shadow p-4 rounded-md bg-white ring-1 ring-slate-300 text-xs space-y-2 flex flex-col items-center justify-center">
            <div className="text-4xl font-semibold">
              <h2 className="text-green-500">80%</h2>
            </div>
            <p className="font-semibold">Bahan Terpakai</p>
          </div>
          <div className="shadow p-4 rounded-md bg-white ring-1 ring-slate-300 text-xs space-y-2 flex flex-col items-center justify-center">
            <div className="text-4xl font-semibold">
              <h2 className="text-red-500">20%</h2>
            </div>
            <p className="font-semibold">Terbuang</p>
          </div>
          <div className="col-span-1 shadow p-4 rounded-md bg-white ring-1 ring-slate-300 text-xs flex flex-col items-center justify-center space-y-3">
            <div>
              <h2 className="text-4xl font-semibold text-green-500">
                12 <span className="text-lg">Kg</span>
              </h2>
            </div>
            <p className="font-semibold">Food waste dicegah</p>
          </div>
          <div className="shadow p-4 rounded-md bg-white ring-1 ring-slate-300 text-xs space-y-2 flex flex-col items-center justify-center">
            <div className="text-4xl font-semibold">
              <h2 className="text-green-500">21.5</h2>
            </div>
            <p className="font-semibold">BMI Score</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p>Tools pilihan</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between">
          <Link to="/recommendation" preventScrollReset={true}>
            <div className="shadow p-2 rounded-md md:w-[120px] md:h-[120px] flex items-end justify-center hover:shadow-md transition-all duration-150">
              <p className="text-xs text-center text-slate-500">
                Rekomendasi Menu Pilihan
              </p>
            </div>
          </Link>
          <Link to="/sales" preventScrollReset={true}>
            <div className="shadow p-2 rounded-md md:w-[120px] md:h-[120px] flex items-end justify-center hover:shadow-md transition-all duration-150">
              <p className="text-xs text-center text-slate-500">
                Belanja Mingguan
              </p>
            </div>
          </Link>
          <Link to="/inventory" preventScrollReset={true}>
            <div className="shadow p-2 rounded-md md:w-[120px] md:h-[120px] flex items-end justify-center hover:shadow-md transition-all duration-150">
              <p className="text-xs text-center text-slate-500">
                Inventori Kamu
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
