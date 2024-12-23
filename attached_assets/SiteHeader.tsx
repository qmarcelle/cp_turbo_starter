import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { PlanSwitcher } from '../composite/PlanSwitcherComponent';
import { SiteHeaderNavSection } from '../composite/SiteHeaderNavSection';
import { SiteHeaderSubNavSection } from '../composite/SiteHeaderSubNavSection';
import menuNavigation from '../menuNavigation';
import { SiteHeaderMenuSection } from './../composite/SiteHeaderMenuSection';
import {
  bcbstBlueLogo,
  bcbstStackedlogo,
  closeIcon,
  globalIdCardIcon,
  hamburgerMenuIcon,
  inboxIcon,
  profileWhiteIcon,
} from './Icons';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="primary-color">
        {/* Header Top Bar */}
        <div className="h-18 w-full lg:static flex justify-between border-b bg-white z-30">
          <div className="flex items-center">
            <div className="flex lg:hidden h-18 w-18 items-center justify-center border-r">
              <button
                data-collapse-toggle="menu-bar"
                type="button"
                className="p-0 justify-center"
                aria-controls="menu-bar"
                aria-expanded="false"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? (
                  <>
                    <span className="sr-only">Close main menu</span>
                    <Image
                      src={closeIcon}
                      alt={'Close icon'}
                      width="18"
                      height="18"
                    ></Image>
                  </>
                ) : (
                  <>
                    <span className="sr-only">Open main menu</span>
                    <Image
                      src={hamburgerMenuIcon}
                      alt={'Menu icon'}
                      width="32"
                      height="32"
                    ></Image>
                  </>
                )}
              </button>
            </div>
            <Link className="ml-5 lg:px-0" href="/dashboard">
              {useMediaQuery({ query: '(max-width: 1023px)' }) ? (
                <Image
                  width="64"
                  height="36"
                  src={bcbstStackedlogo}
                  alt="BCBST Stacked Logo"
                />
              ) : (
                <Image
                  width="174"
                  height="35"
                  src={bcbstBlueLogo}
                  alt="BCBST Logo"
                />
              )}
            </Link>
            <PlanSwitcher
              className="mx-4 w-[268px] hidden md:block"
              plans={[
                {
                  subscriberName: 'Chris Hall',
                  policies: 'Medical, Vision, Dental',
                  planName: 'BlueCross BlueShield of Tennessee',
                  id: 'ABC1234567890',
                },
                {
                  subscriberName: 'Maddison Hall',
                  policies: 'Dental',
                  planName: 'Tennessee Valley Authority',
                  id: 'ABC000000000',
                },
                {
                  subscriberName: 'Chris Hall',
                  policies: 'Medical, Vision, Dental',
                  planName: 'Dollar General',
                  id: 'ABC1234567891',
                  endedOn: '2023',
                },
              ]}
              selectedPlan={{
                subscriberName: 'Chris Hall',
                policies: 'Medical, Vision, Dental',
                planName: 'BlueCross BlueShield of Tennessee',
                id: 'ABC1234567890',
              }}
              onSelectionChange={() => {}}
            />
          </div>
          <SiteHeaderMenuSection
            user={'Chris Hall'}
            icon={<Image src={profileWhiteIcon} alt="Profile Icon"></Image>}
            items={[
              {
                title: 'Inbox',
                label: 'inbox',
                icon: <Image src={inboxIcon} alt="Inbox" />,
                url: 'inbox',
              },
              {
                title: 'ID Card',
                label: 'id card',
                icon: <Image src={globalIdCardIcon} alt="ID Card" />,
                url: 'idcard',
              },
            ]}
          />
        </div>
        {/* Header Nav Bar */}
        <div
          id="menu-bar"
          className="hidden absolute top-[72px] lg:static lg:block w-full md:w-1/2 lg:w-full bg-white z-40"
          data-accordion="collapse"
        >
          <div className="flex font-bold">
            <SiteHeaderNavSection parentPages={menuNavigation} />
          </div>
          <div className="absolute top-0 lg:static w-full lg:w-full bg-white z-50 border-r lg:border-0">
            {menuNavigation.map((page, index) => (
              <SiteHeaderSubNavSection
                key={index}
                id={page.id}
                title={page.title}
                description={page.description}
                category={page.category}
                showOnMenu={page.showOnMenu}
                url={page.url}
                qt={page.qt}
                childPages={page.childPages}
                template={page.template}
                shortLinks={page.shortLinks}
              />
            ))}
          </div>
        </div>
        {/* NavSub Bars */}
      </nav>
      <PlanSwitcher
        className="mx-2 py-2 block md:hidden"
        plans={[
          {
            subscriberName: 'Chris Hall',
            policies: 'Medical, Vision, Dental',
            planName: 'BlueCross BlueShield of Tennessee',
            id: 'ABC1234567890',
          },
          {
            subscriberName: 'Maddison Hall',
            policies: 'Dental',
            planName: 'Tennessee Valley Authority',
            id: 'ABC000000000',
          },
          {
            subscriberName: 'Chris Hall',
            policies: 'Medical, Vision, Dental',
            planName: 'Dollar General',
            id: 'ABC1234567891',
            endedOn: '2023',
          },
        ]}
        selectedPlan={{
          subscriberName: 'Chris Hall',
          policies: 'Medical, Vision, Dental',
          planName: 'BlueCross BlueShield of Tennessee',
          id: 'ABC1234567890',
        }}
        onSelectionChange={() => {}}
      />
    </>
  );
}
