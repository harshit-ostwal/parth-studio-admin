const { User2, UserCog2 } = require("lucide-react");

//Card Data
const CardsData = [
    {
        id: 1,
        icon: <User2 size={48} color="black" />,
        title: 'User Profile',
        href: '/Settings/Profile'
    },
    {
        id: 2,
        icon: <UserCog2 size={48} color="black" />,
        title: 'User Settings',
        href: '/Settings/Users'
    },
]

export default CardsData;