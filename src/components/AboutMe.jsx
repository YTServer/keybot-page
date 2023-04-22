import React from 'react';
import _ from 'lodash';
import ProfileCard from './ProfileCard';
import vars from '../variable';
import { EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default class AboutMe extends React.Component {
  profiles = [
    {
      avatar: vars.admAvatar,
      name: 'Whitey',
      title: '管理員',
      link: vars.admProfile,
    },
    {
      avatar: vars.botAvatar,
      name: '√Whitey | TF2 Keys Bot',
      title: '金鑰機器人',
      link: vars.botProfile,
    },
    {
      avatar: vars.groupAvatar,
      name: '√Whitey Server',
      title: '伺服器群組',
      link: vars.groupProfile,
    },
  ];
  profileCards = _.map(this.profiles, (p, index) => {
    return (
      <ProfileCard
        key={index}
        avatar={p.avatar}
        name={p.name}
        title={p.title}
        link={p.link}
      ></ProfileCard>
    );
  });
  render() {
    return (
      <div id="about">
        <div className="container mx-auto">
          <div className="text-left text-white">
            <p className="text-4xl">Content</p>
            <div className="flex">
              <div className="flex flex-col">{this.profileCards}</div>
              <div>
                <div className="flex items-center text-gray-500">
                  <EnvelopeIcon className="h-8 w-8" />
                  <p className="ml-2">admin@whitey.me</p>
                </div>
                <div className="flex items-center text-gray-500">
                  <GlobeAltIcon className="h-8 w-8" />
                  <p className="ml-2">https://tf2key.whitey.me/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
