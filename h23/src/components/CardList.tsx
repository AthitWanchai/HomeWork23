import MediaCard from "./MediaCard"


function CardList() {
    const mediaCards = Array.from({ length: 9 }, (_, index) => (
        <MediaCard key={index} />
    ));
    return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {mediaCards}
        </div>
    </>
    )
}

export default CardList