import { Film, Gauge, Gem, Gift, Image, Ticket, Users } from 'lucide-react'

export const SideBarData = [
    {
        id: 1,
        Title: "OVERVIEW",
        Menu: [
            {
                id: 1,
                Title: "App",
                href: "/",
                Icon: <Gauge />
            },
            {
                id: 2,
                Title: "Bookings",
                href: "/Bookings",
                Icon: <Ticket />
            },
        ]
    },
    {
        id: 2,
        Title: "MANAGEMENT",
        Menu: [
            {
                id: 1,
                Title: "Gallery",
                href: "Gallery",
                Icon: <Image />
            },
            {
                id: 2,
                Title: "Wedding",
                href: "Wedding",
                Icon: <Gem />
            },
            {
                id: 3,
                Title: "Pre Wedding",
                href: "Pre Wedding",
                Icon: <Gift />
            },
            {
                id: 4,
                Title: "Films",
                href: "Films",
                Icon: <Film />
            },
            {
                id: 5,
                Title: "Users",
                href: "Users",
                Icon: <Users />
            }
        ]
    }
]