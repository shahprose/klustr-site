import { render, screen } from '@testing-library/react';
import Layout from '../components/layout';

// Mock next/image
jest.mock('next/image', () => {
  return function MockImage({ priority, ...props }) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  };
});

// Mock next/link — the Layout component uses the old pattern of wrapping <a> inside <Link>,
// so we render children directly but clone the <a> child to inject the href.
jest.mock('next/link', () => {
  const React = require('react');
  return function MockLink({ href, children }) {
    if (React.isValidElement(children) && children.type === 'a') {
      return React.cloneElement(children, { href });
    }
    return <a href={href}>{children}</a>;
  };
});

describe('Layout component', () => {
  it('home variant renders h1 with site name', () => {
    render(
      <Layout home>
        <p>child content</p>
      </Layout>
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('klustr');
  });

  it('non-home variant renders h2 with link', () => {
    render(
      <Layout>
        <p>child content</p>
      </Layout>
    );
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('klustr');
    expect(heading.querySelector('a')).toHaveAttribute('href', '/');
  });

  it('non-home variant shows "Back to home" link', () => {
    render(
      <Layout>
        <p>child content</p>
      </Layout>
    );
    const backLink = screen.getByText('← Back to home');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('home variant does NOT show "Back to home" link', () => {
    render(
      <Layout home>
        <p>child content</p>
      </Layout>
    );
    expect(screen.queryByText('← Back to home')).not.toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Layout home>
        <p>test child content</p>
      </Layout>
    );
    expect(screen.getByText('test child content')).toBeInTheDocument();
  });
});
