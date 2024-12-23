import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define TypeScript interface for any props if needed in the future
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear(); // Gets the current year
  return (
    <footer className="bg-neutral p-5 text-base-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Popular Links */}
        <div>
          <h5 className="text-lg font-bold mb-2">Popular Links</h5>
          <ul className="list-none">
            <li>
              <Link href="/id-card" className="link link-hover">
                Get an ID Card
              </Link>
            </li>
            <li>
              <Link href="/find-care" className="link link-hover">
                Find Care & Costs
              </Link>
            </li>
            <li>
              <Link href="/claims" className="link link-hover">
                View Claims
              </Link>
            </li>
            <li>
              <Link href="/profile" className="link link-hover">
                Profile Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-lg font-bold mb-2">Support</h5>
          <ul className="list-none">
            <li>
              <Link href="/contact" className="link link-hover">
                Get Help & Contact Us
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="link link-hover">
                Share Your Opinions
              </Link>
            </li>
            <li>
              <Link href="/screen-share" className="link link-hover">
                Share Your Screen
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Information */}
        <div>
          <h5 className="text-lg font-bold mb-2">Important Information</h5>
          <ul className="list-none">
            <li>
              <Link href="/nondiscrimination" className="link link-hover">
                Nondiscrimination
              </Link>
            </li>
            <li>
              <Link href="/fraud" className="link link-hover">
                Fight Fraud
              </Link>
            </li>
          </ul>
        </div>

        {/* Download the App */}
        <div>
          <h5 className="text-lg font-bold mb-2">Download the App</h5>
          <p>Download the app in the Apple Store or Google Play.</p>
          <div className="flex space-x-2">
            <a
              href="https://apple.com"
              className="link link-hover"
              aria-label="Download on the Apple Store"
            >
              <Image src="/path-to-apple-store-logo.png" alt="Apple Store" />
            </a>
            <a
              href="https://play.google.com"
              className="link link-hover"
              aria-label="Download on Google Play"
            >
              <Image src="/path-to-google-play-logo.png" alt="Google Play" />
            </a>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-neutral-focus mt-5 pt-3 text-sm">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <p>©1998-{currentYear} BlueCross BlueShield of Tennessee, Inc.</p>
          <div className="flex justify-end space-x-2">
            <Link href="/sitemap" className="link link-hover">
              Sitemap
            </Link>
            <Link href="/privacy" className="link link-hover">
              Privacy & Security
            </Link>
            <Link href="/legal" className="link link-hover">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
