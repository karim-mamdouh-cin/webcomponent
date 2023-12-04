export const menuItems: Array<MenuItem> = [
  // General routes section
  {
    title: 'General',
    routes: [
      {
        icon: 'assets/sidemenu/home-line.svg',
        title: 'Home',
        route: '/dashboard/home',
        routes: [],
        subRoutes: [],
      },
      {
        title: 'People',
        icon: 'assets/sidemenu/users-01.svg',
        routes: [
          {
            label: 'Overview',
            route: '/dashboard/customers/overview',
          },
          {
            label: 'All Customers',
            route: '/dashboard/customers',
          },
          {
            label: 'Segments',
            route: '/dashboard/segments',
          },
        ],
        subRoutes: [],
      },
    ],
  },

  // Campaigns routes section
  {
    title: 'Campaigns',
    routes: [
      // Social media
      {
        title: 'Social Media',
        icon: 'assets/sidemenu/phone-01.svg',
        routes: [
          {
            label: 'Overview',
            route: '/dashboard/social-ads/overall',
          },
          {
            label: 'Create Campaign',
            route: '/dashboard/social-ads/create/overall',
          },
          {
            label: 'Facebook Campaigns',
            route: '/dashboard/social-ads/facebook',
          },
          {
            label: 'Snapchat Campaigns',
            route: '/dashboard/social-ads/snapchat',
          },
          {
            label: 'TikTok Campaigns',
            route: '/dashboard/social-ads/snapchat',
          },
        ],
        subRoutes: [],
      },

      // Direct messaging
      {
        title: 'Direct Messaging',
        icon: 'assets/sidemenu/message-text-square-01.svg',
        routes: [],
        subRoutes: [
          // SMS
          {
            title: 'SMS',
            routes: [
              {
                label: 'SMS Overview',
                route: '/dashboard/campaigns/sms/insights',
              },
              {
                label: 'Create Campaign',
                route: '/dashboard/campaigns/sms/types',
              },
              {
                label: 'One-Time Campaigns',
                route: '/dashboard/campaigns/sms/one-time-campaign/insights',
              },
              {
                label: 'Automation Campaigns',
                route: '/dashboard/campaigns/sms/automation-campaign/insights',
              },
              {
                label: 'Flow Builder',
                route: '/dashboards/flow-builder',
                new: true,
              },
            ],
            subRoutes: [],
          },
          // Email
          {
            title: 'Email',
            routes: [
              {
                label: 'Email Overview',
                route: '/dashboard/campaigns/email',
              },
              {
                label: 'Create Campaign',
                route: '/dashboard/campaigns/email/types',
              },
              {
                label: 'One-Time Campaigns',
                route: '/dashboard/campaigns/email/one-time-campaign/insights',
              },
              {
                label: 'Automation Campaigns',
                route:
                  '/dashboard/campaigns/email/automation-campaign/insights',
              },
              {
                label: 'Email Validated List',
                route: '/dashboard/campaigns/email/blacklist',
              },
              {
                label: 'Flow Builder',
                route: '/dashboards/flow-builder',
                soon: true,
              },
            ],
            subRoutes: [],
          },
          // Push notifications
          {
            title: 'Push Notification',
            routes: [
              {
                label: 'Push Notification Overview',
                route: '/dashboard/push-notification/overall',
              },
              {
                label: 'Create Campaign',
                route: '/dashboard/push-notification/create-campaign',
              },
              {
                label: 'One-Time Campaigns',
                route: '/dashboard/push-notification/one-time/insights',
              },
              {
                label: 'Automation Campaigns',
                route: '/dashboard/push-notification/automation/insights',
              },
              {
                label: 'Flow Builder',
                route: '/dashboards/flow-builder',
                soon: true,
              },
            ],
            subRoutes: [],
          },
        ],
      },
      // Universal campaign
      {
        title: 'Universal Campaign',
        icon: 'assets/sidemenu/globe-slated-02.svg',
        route: '/dashboard/universal/campaign/create',
        routes: [],
        subRoutes: [],
      },
      // Search engine
      {
        title: 'Search Engine',
        icon: 'assets/sidemenu/search-lg.svg',
        routes: [
          {
            label: 'Google Dynamic Search',
            route: '/dashboard/search-ads/google/search-dynamic',
          },
          {
            label: 'Google Standard Shopping',
            route: '/dashboard/search-ads/google/standard-shopping',
          },
          {
            label: 'Google Static Search',
            route: '/dashboard/search-ads/google/static-search',
          },
        ],
        subRoutes: [],
      },
    ],
  },

  // Tools routes section
  {
    title: 'Tools',
    routes: [
      {
        title: 'Design Studio',
        icon: 'assets/sidemenu/brush-01.svg',
        routes: [
          {
            label: 'Video Creator',
            route: '/dashboard/video-creation/templates',
          },
          {
            label: 'My Videos',
            route: '/dashboard/video-creation/my-video',
          },
        ],
        subRoutes: [],
      },
      {
        title: 'Resources & Tools',
        icon: 'assets/sidemenu/pen-tool-02.svg',
        routes: [],
        subRoutes: [
          {
            title: 'Pop-up Forms',
            routes: [
              {
                label: 'Overview',
                route: '/dashboard/forms',
              },
              {
                label: 'Create Form',
                route: '/dashboard/forms/templates',
              },
            ],
            subRoutes: [],
          },
          {
            title: 'Catalog Intelligence',
            route: '/dashboard/catalogs',
            routes: [],
            subRoutes: [],
          },
        ],
      },
    ],
  },

  {
    title: 'Upcoming',
    routes: [
      {
        title: 'Academy',
        route: 'm',
        soon: true,
        icon: 'assets/sidemenu/book-open-01.svg',
        subRoutes: [],
        routes: [],
      },
    ],
  },
];

export const moreMenuItems: Array<MenuItem> = [
  // General routes section
  {
    title: 'More',
    routes: [
      {
        title: 'Settings',
        icon: 'assets/sidemenu/settings-01.svg',
        routes: [
          {
            label: 'Configurations',
            route: '/dashboard/configuration',
          },
          {
            label: 'Connected Stores',
            route: '/dashboard/data-sources/stores',
          },
          {
            label: 'Social Connections',
            route: '/dashboard/data-sources/social',
          },
          {
            label: 'Display Connections',
            route: '/dashboard/data-sources/display',
          },
        ],
        subRoutes: [],
      },
      {
        icon: 'assets/sidemenu/help-circle.svg',
        title: 'Help Center',
        route: 'https://help.converted.in/en/knowledge',
        routes: [],
        subRoutes: [],
      },
    ],
  },
];

interface SideNavItem {
  title: string;
  icon?: string;
  route?: string;
  soon?: boolean;
  new?: boolean;
  routes: Array<{
    label: string;
    route: string;
    soon?: boolean;
    new?: boolean;
  }>;
  subRoutes: Array<SideNavItem>;
}

interface MenuItem {
  title: string;
  routes: Array<SideNavItem>;
}
