import React from "react";
import ProfileCard from "./ProfileCard";
import vars from "./variable";
export class AboutMe extends React.Component {
  render() {
    return (
      <div id="about-me">
        <div className="container mx-auto mt-28 flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="basis-2/3 pl-40 text-left text-white">
            <p className="text-4xl">About Me</p>
            <div className="flex flex-col space-y-4 space-x-10">
              <ProfileCard
                avatar={vars.botAvatar}
                name="√Whitey | TF2 Keys Bot"
                title="金鑰機器人"
                link={vars.botProfile}
              />
              <ProfileCard
                avatar={vars.admAvatar}
                name="Whitey"
                title="管理員"
                link={vars.admProfile}
              />
              <ProfileCard
                avatar={vars.groupAvatar}
                name="√Whitey Server"
                title="伺服器群組"
                link={vars.groupProfile}
              />
              <div></div>
              <div>
                管理員：
                <a
                  className="text-blue-200"
                  href="https://steamcommunity.com/id/Whitey_-/"
                >
                  Whitey
                </a>
              </div>
              <div>
                金鑰機器人：
                <a
                  className="text-blue-200"
                  href="https://steamcommunity.com/id/Whitey_Keybot/"
                >
                  √Whitey | TF2 Keys Bot
                </a>
              </div>

              <div>
                伺服器群組：
                <a
                  className="text-blue-200"
                  href="https://steamcommunity.com/groups/Whitey_Server"
                >
                  √Whitey Server
                </a>
              </div>
              <div>
                為了避免產生爭議，購買前請先詳細閱讀以下內容，有任何問題都可以詢問管理員
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
