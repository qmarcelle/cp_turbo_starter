import Image from 'next/image';
import { Row } from '../../foundation/Row';
import { Column } from '../../foundation/Column';
import { TextBox } from '../../foundation/TextBox';

interface FooterProps {
  logo?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  copyright?: string;
  className?: string;
}

export const Footer = ({
  logo,
  links,
  copyright,
  className,
}: FooterProps) => {
  return (
    <footer className={`bg-gray-100 py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <Row className="justify-between items-center">
          <Column>
            {logo && (
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            )}
          </Column>
          <Row className="space-x-6">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </Row>
        </Row>
        {copyright && (
          <TextBox
            className="text-center text-gray-600 mt-6"
            text={copyright}
          />
        )}
      </div>
    </footer>
  );
};