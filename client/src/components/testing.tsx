function testPage() {
  return (
    <div>
      <>
        <main className="grow flex flex-col items-center justify-center">
          <div className="bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-lg p-1 w-full max-w-sm h-[32rem] shadow-xl hover:shadow-lg transition transition-shadow duration-600">
            <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur h-full rounded-md">
              <div
                className="h-full w-full"
                style={{ backgroundImage: 'url("images/topography.svg")' }}
              >
                <div
                  className="flex w-full justify-center items-center h-full"
                  id="loader"
                >
                  <img className="h-8 w-8" src="images/loading.svg" />
                </div>
                <div
                  id="container"
                  className="hidden flex flex-col h-full justify-center space-y-8"
                >
                  <h1
                    id="city"
                    className="text-xl font-semibold text-indigo-900 text-center tracking-wider uppercase"
                  />
                  <div className="flex flex-col w-full items-center space-y-4">
                    <div className="bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-full p-1">
                      <div className="w-fit outline outline-8 outline-indigo-100/50 rounded-full bg-white">
                        <img
                          id="icon"
                          className="h-32 w-32 mx-auto"
                          src=""
                          alt="Weather Icon"
                        />
                      </div>
                    </div>
                    <h2
                      id="description"
                      className="text-sm font-light text-indigo-500/70 text-center tracking-widest uppercase"
                    />
                  </div>
                  <h3
                    id="currentTemp"
                    className="text-7xl font-bold text-center text-indigo-900"
                  />
                  <div className="flex justify-center space-x-2 font-normal text-xs text-indigo-800/70 tracking-wide">
                    <h3 id="minTemp" />
                    <span>/</span>
                    <h3 id="maxTemp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </div>
  );
}

export default testPage;
