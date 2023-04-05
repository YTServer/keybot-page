import React from 'react';
import _ from 'lodash';
import ProfileCard from './ProfileCard';
import vars from '../variable';

export default class AboutMe extends React.Component {
  profiles = [
    {
      avatar: vars.botAvatar,
      name: '√Whitey | TF2 Keys Bot',
      title: '金鑰機器人',
      link: vars.botProfile,
    },
    {
      avatar: vars.admAvatar,
      name: 'Whitey',
      title: '管理員',
      link: vars.admProfile,
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
      <div id="about-me" className="h-screen snap-center">
        <div className="container mx-auto mt-28">
          <div className="md:pl:20 text-left text-white sm:pl-0 lg:pl-20">
            <p className="text-4xl">About Me</p>
            <div className="flex">{this.profileCards}</div>
          </div>
        </div>
      </div>
    );
  }
}
