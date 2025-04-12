import { v4 as uuidv4 } from "uuid";

export const FIGMA_PROJECTS = Object.freeze([
    {
        id: uuidv4(),
        title: "In-Between",
        thumbnail: "/projects/thumbnails/project-in-between.jpg",
        overview:
            "For 'In-Between', an online gambling game, we undertook a project to revitalize its user experience. This involved a complete UI redesign, a new interactive chat system, and the creation of a brand mascot. The aim was to create a more engaging and user-friendly platform, improving player interaction and retention. We focused on intuitive design and real-time community features to deliver a successful gaming experience.",
        contribution: [
            "Developed a high-fidelity prototype using Figma to visualize and refine the game's new user interface.",
            "Illustrated a leprechaun mascot, then converted it into a vector graphic using Photoshop for seamless scalability and integration.",
            "Designed a custom iconography set to enhance the game's visual language and user experience.",
            "Created graphic designs for playing cards, ensuring consistency with the game's redesigned aesthetic.",
            "Redesigned the overall user interface to improve usability and visual appeal.",
        ],
        execution: [
            "I re-imagined the casino tabletop by incorporating their requested green aesthetic with a subtle, repeating pattern, enhancing visual interest without overwhelming the user.",
            "The requested yellow/gold coin color was retained to maintain brand consistency, but the distracting glow effect was removed, resulting in a cleaner, more professional look.",
            "Clear and intuitive button states were implemented using a black (active) and white (inactive) color scheme, providing immediate visual feedback to the user.",
            "Comprehensive cover UI designs were developed for pending, queuing, and win states, ensuring clear communication and a seamless user experience.",
            "To address potential user frustration, a fallback page was proposed for instances where the desired table is full, offering a smooth transition and alternative options.",
        ],
        images: [
            { src: "/projects/in-between/app-logo.png", title: "Application Logo" },
            { src: "/projects/in-between/app-mascot.png", title: "Application Mascot" },
            { src: "/projects/in-between/app-old-classic-ui.png", title: "Application Old UI" },
            { src: "/projects/in-between/desktop-rush-result.png", title: "Desktop Rush Mode - deal result" },
            {
                src: "/projects/in-between/desktop-rush-waiting-on-result.png",
                title: "Desktop Rush Mode - waiting on result",
            },
            {
                src: "/projects/in-between/desktop-rush-win-notification.png",
                title: "Desktop Rush Mode - win notification",
            },
            { src: "/projects/in-between/desktop-table-list.png", title: "Desktop Table List" },
            { src: "/projects/in-between/mobile-classic-deal-result.png", title: "Mobile Classic Mode - deal result" },
            {
                src: "/projects/in-between/mobile-classic-player-turn-enabled.png",
                title: "Mobile Classic Mode - player turn enabled",
            },
            { src: "/projects/in-between/mobile-rush-deal-close.png", title: "Mobile Rush Mode - deal close" },
            { src: "/projects/in-between/mobile-rush-deal-open.png", title: "Mobile Rush Mode - deal open" },
            {
                src: "/projects/in-between/mobile-rush-deal-result-slide-in.png",
                title: "Mobile Rush Mode - deal result slide in",
            },
            {
                src: "/projects/in-between/mobile-rush-winner-announcement.png",
                title: "Mobile Rush Mode - win announcement",
            },
        ],
        prototype:
            "https://www.figma.com/proto/wfy4rtVeTasn9gNiOOW30Z/In-Between-UI-Improvements?node-id=2031-759&starting-point-node-id=2031%3A759",
        link: null,
        isFigma: true,
        isDesign: false,
    },
    {
        id: uuidv4(),
        title: "Point Of Sale",
        thumbnail: "/projects/thumbnails/project-pos.jpg",
        overview:
            "The client required a prototype for a restaurant Point of Sale (POS) system, encompassing order management and Human Resource Management (HRM) functionalities. This system was designed for internal use, with a primary focus on horizontal iPad deployment while maintaining vertical mode compatibility. The goal was to create an intuitive and efficient interface that streamlined restaurant operations.",
        contribution: [
            "Application Design and Prototyping: Developing the overall design and interactive prototype for the POS system.",
            "Logo Placeholder: Creating a temporary logo to establish the system's visual identity during the prototyping phase.",
            "Custom Iconography: Designing a set of custom icons to enhance the system's visual language and user experience.",
            "Order/Menu Interface Design: Designing an intuitive and efficient interface for order management and menu navigation.",
            "Employee/Cashier Management: Designing secure employee/cashier login and change interfaces, incorporating PIN authentication.",
            "HRM Web Application Design: Developing the user interface for the HRM web application, focusing on administrative functionalities.",
            "General Component Design: Creating a library of reusable UI components to ensure consistency across the POS system.",
            "Order Line Design: Designing an order line component for real-time order monitoring.",
        ],
        execution: [
            "Simplified Design Philosophy: I adopted a minimalist design approach, prioritizing clarity and ease of use.",
            "Color Palette and Styling: A purple accent color was integrated to provide visual consistency, complemented by thin borders and rounded edges for a modern aesthetic.",
            "iPad Optimization: Recognizing the target device, I designed larger, easily tappable buttons while minimizing the size of less frequently used controls to prevent accidental interactions.",
            "Admin Tool Integration: The HRM web application, or 'Admin Tool,' was designed with a consistent purple color scheme to maintain brand unity across the system.",
        ],
        images: [
            { src: "/projects/pos/app-logo.png", title: "Application Logo" },
            { src: "/projects/pos/desktop.png", title: "Web Application Admintool" },
            { src: "/projects/pos/desktop-form.png", title: "Web Application Admintool Form" },
            { src: "/projects/pos/iPad-horizontal-add-order.png", title: "POS Add Order" },
            { src: "/projects/pos/iPad-horizontal-employee-clock-in.png", title: "POS Employee Clock-In" },
            { src: "/projects/pos/iPad-horizontal-manage-shift.png", title: "POS Shift Management" },
            { src: "/projects/pos/iPad-horizontal-open-food-details-dialog.png", title: "POS Food Details" },
            { src: "/projects/pos/iPad-horizontal-order-line.png", title: "POS Order Line" },
        ],
        prototype:
            "https://www.figma.com/proto/qds6R9PZzk8TYhIEIpyBz7/POS?node-id=117-11753&t=zWMtvR0grkIDKOuV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=151%3A7539&show-proto-sidebar=1",
        link: null,
        isFigma: true,
        isDesign: false,
    },
    {
        id: uuidv4(),
        title: "WorxSnap",
        thumbnail: "/projects/thumbnails/project-worxsnap.jpg",
        overview:
            "'WorxSnap' is a comprehensive Human Resource Management (HRM) service and system developed from the ground up. The client sought a sophisticated and user-friendly design, encompassing both a public-facing landing page and an internal, desktop-optimized web application. The goal was to create a seamless and intuitive experience for both potential clients and internal users, highlighting the efficiency and capabilities of the WorxSnap platform.",
        contribution: [
            "Logo Design: Creating a distinctive logo that captured the essence of WorxSnap, incorporating an infinity symbol and the client's preferred indigo and violet color palette.",
            "Landing Page Design (WordPress): Designing visually appealing and informative landing pages for WordPress, utilizing the established indigo, violet, and white color scheme to maintain brand consistency.",
            "Web Application UI/UX Design: Developing the user interface and user experience for the internal web application, with a focus on desktop usability and efficiency.",
            "Component Design: Creating reusable UI components, including input fields and buttons, optimized for frequent use within the web application.",
            "Custom Iconography: Designing a set of custom icons to enhance the application's visual language and improve user navigation.",
            "General Component Design: Developing a library of general-purpose components to ensure a cohesive and efficient user experience throughout the application.",
        ],
        execution: [
            "Logo Development: I began by designing the logo, focusing on the infinity symbol as a representation of continuous growth and connection, while adhering to the client's indigo and violet color preferences.",
            "Landing Page Implementation: The landing pages were designed for WordPress, employing a clean and modern design aesthetic with the client's specified color palette to create a strong first impression.",
            "Web Application Design (Desktop-Focused): Recognizing the desktop and internal use requirements, I designed the web application with a desktop-like interface. This included a side task bar for efficient navigation, resizable and minimizable windows for multitasking, and a comprehensive calendar UI to streamline scheduling and management.",
        ],
        images: [
            { src: "/projects/worxsnap/app-logo.png", title: "Application Logo" },
            { src: "/projects/worxsnap/landing-page-desktop.png", title: "Landing Page" },
            { src: "/projects/worxsnap/landing-page-scrolled.png", title: "Landing Page Scrolled" },
            { src: "/projects/worxsnap/web-app-Login.png", title: "Web Application Login" },
            { src: "/projects/worxsnap/web-app-open-drawer.png", title: "Web Application Open App Drawer" },
            { src: "/projects/worxsnap/web-app-widgets.png", title: "Web Application Widget" },
            { src: "/projects/worxsnap/web-app-calendar.png", title: "Web Application Calendar" },
            { src: "/projects/worxsnap/web-app-employee-page.png", title: "Web Application Employee Page" },
            {
                src: "/projects/worxsnap/web-app-general-component-content.png",
                title: "Web Application General Component Content",
            },
            { src: "/projects/worxsnap/web-app-general-component.png", title: "Web Application General Component" },
            {
                src: "/projects/worxsnap/web-app-leave-request-modal-leave-request-form.png",
                title: "Web Application Leave Request Modal",
            },
        ],
        prototype:
            "https://www.figma.com/design/IQUmubVABYiEEdp0ab1i80/WorxSnap-Components?node-id=1-2&p=f&t=M8lQ14FJnsGenUr8-0",
        link: null,
        isFigma: true,
        isDesign: false,
    },
]);

export const LOGO_PROJECTS = Object.freeze([
    {
        id: uuidv4(),
        title: "Crescente",
        thumbnail: "/projects/logos/logo-crescente.jpg",
        link: "https://secure.crescente.net/",
    },
    {
        id: uuidv4(),
        title: "Summit Formula",
        thumbnail: "/projects/logos/logo-summit-formula.jpg",
        link: "https://summit-formula.com/",
    },
    {
        id: uuidv4(),
        title: "Panalods",
        thumbnail: "/projects/logos/logo-panalods.jpg",
        link: "https://www.panalods.ph/",
    },
    {
        id: uuidv4(),
        title: "Infiniweb",
        thumbnail: "/projects/logos/logo-infiniweb.jpg",
        link: null,
    },
]);

export const DEV_PROJECTS = Object.freeze([
    {
        id: uuidv4(),
        title: "Panalods",
        thumbnail: "/projects/wd-fed/wd-fed-panalods.jpg",
        link: "https://www.panalods.ph/",
    },
    {
        id: uuidv4(),
        title: "Crescente",
        thumbnail: "/projects/wd-fed/wd-fed-crescente.jpg",
        link: "https://secure.crescente.net/",
    },
    {
        id: uuidv4(),
        title: "Orchard Road",
        thumbnail: "/projects/wd-fed/wd-fed-orchard-road.jpg",
        link: "https://greenyellow-moose-936833.hostingersite.com/",
    },
    {
        id: uuidv4(),
        title: "Yes We Fulfill",
        thumbnail: "/projects/wd-fed/wd-fed-yes-we-fulfill.jpg",
        link: "https://app.yeswefulfill.com/",
    },
]);

export const IH_PROJECTS = Object.freeze([
    {
        id: uuidv4(),
        title: "Admintool",
        thumbnail: "/projects/idle-hand/ih-admin-tool.jpg",
        link: "https://admintool-mocha.vercel.app/",
    },
    {
        id: uuidv4(),
        title: "Calendar",
        thumbnail: "/projects/idle-hand/ih-calendar.jpg",
        link: "https://codepen.io/milhamethyz/pen/BadXrZX",
    },
    {
        id: uuidv4(),
        title: "Gauge and Bar Rating",
        thumbnail: "/projects/idle-hand/ih-gauge-and-bar-rating.jpg",
        link: "https://codepen.io/milhamethyz/pen/yLYeXNo",
    },
    {
        id: uuidv4(),
        title: "Icons Using Pseudo Element",
        thumbnail: "/projects/idle-hand/ih-pseudo-element-icons.jpg",
        link: "https://codepen.io/milhamethyz/pen/MWgQLdv",
    },
]);
