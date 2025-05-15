type Notification_Data = {
  id: string;
  title: string;
  description: {text: string; color?: 'primary' | 'success' | 'secondary' | 'warning' | 'danger'}[];
  buttons: {title: string; destination: 'dashboard' | 'extensions' | 'modules' | string}[];
  iconColor?: 'primary' | 'success' | 'secondary' | 'warning' | 'danger';
};

const staticNotifications: Notification_Data[] = [
  {
    id: 'new_module',
    title: 'New Module Available',
    description: [
      {
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
          " Lorem Ipsum has been the industry's standard dummy text ever since the 150 " +
          'ge Maker including versions of Lorem Ipsum.',
      },
    ],
    buttons: [{title: 'Modules Page', destination: 'modules'}],
  },
  {
    id: 'patreon_discount',
    iconColor: 'success',
    title: 'Patreon Discount',
    description: [{text: 'Get 90% Off for patreon discount nowww', color: 'warning'}, {text: 'And get updates'}],
    buttons: [{title: 'Patreon Page', destination: 'https://www.patreon.com/LynxHub'}],
  },
  {
    id: 'patreon_discount2',
    iconColor: 'warning',
    title: 'Patreon Discount',
    description: [{text: 'Get 90% Off for patreon discount nowww', color: 'secondary'}, {text: 'And get updates'}],
    buttons: [{title: 'Patreon Page', destination: 'https://www.patreon.com/LynxHub'}],
  },
  {
    id: 'patreon_discount3',
    iconColor: 'danger',
    title: 'Patreon Discount',
    description: [{text: 'Get 90% Off for patreon discount nowww', color: 'primary'}, {text: 'And get updates'}],
    buttons: [{title: 'Patreon Page', destination: 'https://www.patreon.com/LynxHub'}],
  },
];

export default staticNotifications;
