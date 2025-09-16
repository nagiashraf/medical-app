import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "@inertiajs/react";

const megaMenu = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
    ]
  },
  {
    title: "Doctors",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
    ]
  },
  {
    title: "Specialists",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
    ]
  },
  {
    title: "Symptoms",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "Video prescription refill",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
      {
        title: "UTI consult",
        slug: "tele-health",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere accusantium optio sapiente, quas assumenda ullam.",
      },
    ]
  },
]

export default function MegaMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="space-x-4">
        {megaMenu.map((item, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {item.services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/services/${component.slug}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
