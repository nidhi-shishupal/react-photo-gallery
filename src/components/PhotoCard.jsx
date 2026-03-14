const PhotoCard = ({ photo, toggleFavourite, favourites }) => {

    const isFav = favourites.some(p => p.id === photo.id);

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">

            <img
                src={photo.download_url}
                alt={photo.author}
                className="w-full h-48 object-cover"
            />

            <div className="p-3 flex justify-between items-center">

                <p className="text-sm font-medium">{photo.author}</p>

                <button
                    onClick={() => toggleFavourite(photo)}
                    className="text-xl"
                >
                    {isFav ? "❤️" : "🤍"}
                </button>

            </div>

        </div>
    );
};

export default PhotoCard;