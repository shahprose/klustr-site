import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

// Mock next/head to render children into the document head
jest.mock('next/head', () => {
  return function MockHead({ children }) {
    return <>{children}</>;
  };
});

// Mock react-confetti
jest.mock('react-confetti', () => {
  return function MockConfetti(props) {
    return <div data-testid="confetti" />;
  };
});

// Mock react-use
jest.mock('react-use', () => ({
  useWindowSize: () => ({ width: 1024, height: 768 }),
}));

describe('Landing Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders page title', () => {
    const title = document.querySelector('title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('klustr - a kafka monitoring solution');
  });

  it('renders meta description', () => {
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute(
      'content',
      'klustr - a kafka monitoring solution'
    );
  });

  it('renders navigation links with correct hrefs', () => {
    const navFeatures = document.querySelector('a[href="/#features"]');
    expect(navFeatures).not.toBeNull();
    expect(navFeatures.textContent).toBe('Features');

    const navDemo = document.querySelector('a[href="/#demo"]');
    expect(navDemo).not.toBeNull();
    expect(navDemo.textContent).toBe('Demo');

    expect(screen.getByText('Meet the Team').closest('a')).toHaveAttribute(
      'href',
      '/#team'
    );
  });

  it('renders tagline', () => {
    expect(
      screen.getByText('An open source monitoring tool for Apache Kafka')
    ).toBeInTheDocument();
  });

  it('does not show confetti by default', () => {
    expect(screen.queryByTestId('confetti')).not.toBeInTheDocument();
  });

  it('clicking logo toggles confetti on and off', () => {
    const splashLogo = document.querySelector('#splashLogo');

    fireEvent.click(splashLogo);
    expect(screen.getByTestId('confetti')).toBeInTheDocument();

    fireEvent.click(splashLogo);
    expect(screen.queryByTestId('confetti')).not.toBeInTheDocument();
  });

  it('renders all 4 feature cards with correct titles', () => {
    expect(screen.getByText('User-friendly GUI')).toBeInTheDocument();
    expect(screen.getByText('Insight')).toBeInTheDocument();
    expect(screen.getByText('Health Monitoring')).toBeInTheDocument();
    expect(screen.getByText('Live Stream')).toBeInTheDocument();
  });

  it('renders all 5 demo GIF images', () => {
    const expectedSrcs = [
      '/images/Broker-Entry.gif',
      '/images/Graph-SM.gif',
      '/images/Cluster-Overview-SM.gif',
      '/images/Core-Metrics-SM.gif',
      '/images/Broker-View-SM.gif',
    ];
    const gifImages = document.querySelectorAll('.gif-img');
    expect(gifImages).toHaveLength(5);
    gifImages.forEach((img, i) => {
      expect(img).toHaveAttribute('src', expectedSrcs[i]);
    });
  });

  it('renders all 5 team members with correct names', () => {
    expect(screen.getByText('Shah Chaudri')).toBeInTheDocument();
    expect(screen.getByText('Paul Kim')).toBeInTheDocument();
    expect(screen.getByText('Cris Newsome')).toBeInTheDocument();
    expect(screen.getByText('Eric Tacher')).toBeInTheDocument();
    expect(screen.getByText('Katrina Villanueva')).toBeInTheDocument();
  });

  it('each team member has GitHub and LinkedIn links', () => {
    const teamMembers = document.querySelectorAll('.team-members');
    expect(teamMembers).toHaveLength(5);
    teamMembers.forEach((member) => {
      const links = member.querySelectorAll('a');
      expect(links.length).toBeGreaterThanOrEqual(2);
      const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
      expect(hrefs.some((h) => h.includes('github.com'))).toBe(true);
      expect(hrefs.some((h) => h.includes('linkedin.com'))).toBe(true);
    });
  });

  it('footer displays current year', () => {
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });

  it('has correct GitHub repo and Medium article links', () => {
    const githubLinks = document.querySelectorAll(
      'a[href="https://github.com/oslabs-beta/klustr"]'
    );
    expect(githubLinks.length).toBeGreaterThanOrEqual(1);

    const mediumLinks = document.querySelectorAll(
      'a[href="https://medium.com/@klgvillanueva/an-intimate-look-at-your-kafka-cluster-with-klustr-dc448ca45c42"]'
    );
    expect(mediumLinks.length).toBeGreaterThanOrEqual(1);
  });
});
