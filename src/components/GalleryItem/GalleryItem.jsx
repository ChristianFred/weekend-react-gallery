function GalleryItem({item, changeLikes}) {
    return (
        <tr key={item.id}> 
            <td>{item.path}</td>
            <td>{item.description}</td>
            <td>{item.likes}</td>
            <td>
                <button onClick={() => changeLikes(item, 'up')}>Like this Image</button>
                <button onClick={() => changeLikes(item, 'down')}>Dislike this Image</button>
            </td>
        </tr>
    );
}
export default GalleryItem;