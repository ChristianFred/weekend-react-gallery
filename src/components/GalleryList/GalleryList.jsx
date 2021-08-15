
function GalleryList({galleryList}) {
    return(
        <section>
            <table>
                <tbody>
                    {galleryList.map((item) => (
                        <GalleryItem
                        />
                    ))}
                </tbody>
            </table>
        </section>

    )
}
export default GalleryList;