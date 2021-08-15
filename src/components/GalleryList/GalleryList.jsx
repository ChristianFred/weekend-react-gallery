import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, changeLikes}) {
    return(
        <section>
            <table>g
                <tbody>
                    {galleryList.map((item) => (
                        <GalleryItem
                        key={item.id}
                        item={item}
                        changeLikes={changeLikes}
                        />
                    ))}
                </tbody>
            </table>
        </section>

    )
}
export default GalleryList;