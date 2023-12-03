import { FooterContainer, Subscription, Link } from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <Subscription>
        Provided by{' '}
        <Link
          href="https://github.com/P-Burchenkov"
          target="blank"
          rel="noreferrer noopener"
        >
          https://github.com/P-Burchenkov
        </Link>
      </Subscription>
    </FooterContainer>
  );
}
