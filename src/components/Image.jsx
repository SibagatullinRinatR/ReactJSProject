
import { useEffect, useState } from "react";

const ImageCastom= ({name}) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        import(`../images/photo/${name}`)
            .then(tt => {
                setImage(tt.default)
                
            })
    }, [name]);

    return (
        <img className="image" src={image} alt={image} />

    );}



export default ImageCastom;