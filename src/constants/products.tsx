import plura from "public/images/plura.webp";
import lms from "public/images/lms.webp";
import ecommerce from "public/images/ecommerce.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
    {
        href: "https://github.com/okHassan/plura",
        title: "Plura - Website Builder",
        description:
            "SaaS Website Builder, Project Management And Dashboard",
        thumbnail: plura,
        images: [plura],
        stack: ["Nextjs", "Tailwindcss", "prisma", "mysql", "stripe"],
        slug: "plura",
        content: (
            <div>
                <p>
                    Plura is a multi-vendor (B2B2B) white labeled, All in one CRM marketing tool for Agency owners. Agency owners can purchase a subscription to Plura and whitelabel the features it offers and sell them to their clients. {" "}
                </p>
                <p>
                    <h3>List of all the features:</h3>
                    🤯 Multivendor B2B2B Saas <br />
                    🏢 Agency and Sub accounts  <br />
                    🌐 Unlimited funnel hosting  <br />
                    🚀 Full Website & Funnel builder <br />
                    💻 Role-based Access <br />
                    🔄 Stripe Subscription plans <br />
                    🛒Stripe add-on products <br />
                    🔐 Connect Stripe accounts for all users! - Stripe Connect <br />
                    💳 Charge application fee per sale and recurring sales <br />
                    💰 Custom Dashboards <br />
                    📊 Media Storage <br />
                    📈 Stripe Product Sync <br />
                    📌Custom checkouts on funnels <br />
                    📢 Get leads from funnels <br />
                    🎨 Khanban board <br />
                    📂 Project management system <br />
                    🔗 Notifications <br />
                    📆 Funnel performance metrics <br />
                    🧾 Agency and subacc metrics <br />
                    🌙 Graphs and charts <br />
                    ☀️ Light & Dark mode <br />
                    📄 Functioning landing page <br />
                </p>{" "}
            </div>
        ),
    },
    {
        href: "https://github.com/okHassan?tab=repositories",
        title: "Learning Management System",
        description:
            "SAAS LMS With Custom Domains & Affiliates.",
        thumbnail: lms,
        images: [lms],
        stack: ["Nextjs", "Tailwindcss", "mysql", "stripe"],
        slug: "lms",
        content: (
            <div>
                <p>
                    Learning management platform for coaches and course creators.{" "}
                </p>
                <p>
                    <h3>List of all the features:</h3>
                    💰 Custom single line stripe component with animations <br />
                    🏆 Custom onboarding to increase conversions <br />
                    🧑‍💼 Multi Vendor Support <br />
                    ✍️ Custom Clerk Sign in & out <br />
                    🤝 Affiliate marketing systems for groups and for our app <br />
                    💥 Custom domain hosting inside the app using name servers to white label the groups <br />
                    🏝️ New pricing model for groups, 1 group for $99/m <br />
                    🎁 Free and Paid groups <br />
                    🎥Create and host course modules <br />
                    💰$0 video hosting for course modules <br />
                    📃 Custom about pages for groups <br />
                    ✍️ Node based text editor like notion <br />
                    📱 Create posts, like and comment on posts <br />
                    🎨Beautiful and improved custom UI <br />
                    ⚙️Production ready project setup with husky, linters and more <br />
                    📅 Calendar and events for groups <br />
                    💬 Real time chat for groups (if we have time) <br />
                    📄 Beautiful landing page for our app <br />
                    🗺️ Explore page for all groups <br />
                    🔍 Performant Search features <br />
                    🛝 Custom Infinite carousels with infinite scroll <br />
                    🔢Pagination with infinite scroll <br />
                    📊 Dashboard to see group metrics <br />
                    🟣And so much more…. <br />

                </p>{" "}
            </div>
        ),
    },
    {
        href: "https://github.com/okHassan?tab=repositories",
        title: "E-commerce",
        description:
            "A Full Stack E-commerce Platform",
        thumbnail: ecommerce,
        images: [ecommerce],
        stack: ["Nextjs", "Tailwindcss"],
        slug: "ecommerce",
        content: (
            <div>
                <p>
                    <h3>List of all the features:</h3>
                    💰 Home Page with featured products and categories. <br />
                    🏆 Product Listing with filters and search functionality. <br />
                    💥 Product Details Page with reviews and ratings. <br />
                    🧑‍💼 User Authentication (Sign up, Login, Logout). <br />
                    🏝️ Shopping Cart to manage selected items. <br />
                    🎁 Order Management and payment gateway integration. <br />
                    🎥 Responsive Design optimized for mobile and desktop. <br />
                    📃 SEO Optimization for better search engine rankings..{" "}
                </p>
            </div>
        ),
    },
    // {
    //     href: "https://tailwindmasterkit.com",
    //     title: "Tailwind Master Kit",
    //     description:
    //         "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    //     thumbnail: sidefolioTailwindMasterKit,
    //     images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    //     stack: ["Nextjs", "Tailwindcss"],
    //     slug: "tailwindmasterkit",
    //     content: (
    //         <div>
    //             <p>
    //                 Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
    //                 dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
    //                 cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
    //                 cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
    //                 non cupidatat duis esse velit ut culpa et.{" "}
    //             </p>
    //             <p>
    //                 Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
    //                 Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
    //                 sit aute fugiat incididunt nostrud consequat proident fugiat id.
    //                 Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
    //                 reprehenderit. Cillum Lorem veniam eu magna exercitation.
    //                 Reprehenderit adipisicing minim et officia enim et veniam Lorem
    //                 excepteur velit adipisicing et Lorem magna.
    //             </p>{" "}
    //         </div>
    //     ),
    // },
];
