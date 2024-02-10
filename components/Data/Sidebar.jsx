import { Contact2, Film, Gauge, Gem, Gift, Image, Ticket, TrendingUp } from 'lucide-react'

export const SideBarData = [
    {
        id: 1,
        Title: "OVERVIEW",
        Menu: [
            {
                id: 1,
                Title: "App",
                href: "/App",
                Icon: <Gauge />
            },
            {
                id: 2,
                Title: "Bookings",
                href: "/Bookings",
                Icon: <Ticket />
            },
            {
                id: 3,
                Title: "Analytics",
                href: "Analytics",
                Icon: <TrendingUp />
            },
            {
                id: 4,
                Title: "Contact Us",
                href: "Contact Us",
                Icon: <Contact2 />
            }
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
            }
        ]
    }
]