import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, changeLike}) {
    return(
        <section>
            <table>
                <tbody>
                    {galleryList.map((item) => (
                        <GalleryItem
                        key={item.id}
                        item={item}
                        changeLike={changeLike}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    );
}
export default GalleryList;