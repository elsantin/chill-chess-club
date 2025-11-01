export default function Loading() {
  return (
    <div className="bg-warmGray-950 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-sunset-500 border-r-transparent"></div>
        <p className="mt-4 text-warmGray-300">Cargando...</p>
      </div>
    </div>
  );
}
