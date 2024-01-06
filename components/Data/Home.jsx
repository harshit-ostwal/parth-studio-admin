const { Video, Film, Camera, GalleryThumbnails, Settings } = require("lucide-react");

//Card Data
const CardsData = [
    {
        id: 1,
        icon: <GalleryThumbnails size={48} color="black" />,
        title: 'Gallery',
        href: '/Gallery'
    },
    {
        id: 2,
        icon: <Video size={48} color="black" />,
        title: 'Wedding',
        href: '/Wedding'
    },
    {
        id: 3,
        icon: <Camera size={48} color="black" />,
        title: 'Pre Wedding',
        href: '/PreWedding'
    },
    {
        id: 4,
        icon: <Film size={48} color="black" />,
        title: 'Films',
        href: '/Films'
    },
    {
        id: 5,
        icon: <Settings size={48} color="black" />,
        title: 'Settings',
        href: '/Settings'
    },
]

export default CardsData;