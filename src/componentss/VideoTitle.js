const VideoTitle = ({title,overview}) => {
    return(
        <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
            <h1 className="font-bold px-2 m-4 text-4xl text-white">{title}</h1>
            <p className="w-1/4 text-white">{overview}</p>
            <div className="">
                <button className="bg-white text-black px-12 py-4 rounded-lg hover:bg-opacity-70">▶ Play</button>
                <button className="m-6 bg-gray-500 text-white px-12 py-4 rounded-lg hover:bg-opacity-70">ℹ More Info</button>
            </div>
        </div>
    );
}
export default VideoTitle;