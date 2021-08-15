function GalleryItem({item, changeLike}) {

    function PicFlipper(item) {
        let binaryFlip = 1;
        if (binaryFlip === 1) {
            binaryFlip = 0
            return
            <td>{item.description}</td>
        }
        else if (binaryFlip === 0) {
            binaryFlip = 1
            return
            <img src = { item.path }/>
        }
    }
    return (
        <tr key={item.id}> 
            <img src={item.path} />
            <PicFlipper />
            <td>{item.likes}</td>
            <td>
                <button onClick={() => changeLike(item.id)}>Like this Image</button>
            </td>
        </tr>
    );
}
export default GalleryItem;