import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {
    return(
        <section>
            <table>
                <tbody>
                    {galleryList.map((item) => (
                        <GalleryItem
                        key={item.id}
                        item={item}
                        />
                    ))}
                </tbody>
            </table>
        </section>

    )
}
export default GalleryList;