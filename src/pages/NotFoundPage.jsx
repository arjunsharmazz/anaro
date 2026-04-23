import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageShell from '../components/PageShell';

function NotFoundPage() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[72vh] max-w-5xl items-center px-4 sm:px-6 lg:px-8">
        <div className="noise-overlay glass-panel relative w-full overflow-hidden rounded-[2.5rem] px-8 py-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,0,0,0.3),_transparent_40%)]" />
          <div className="relative z-10">
            <p className="text-[7rem] font-semibold leading-none text-white/12 sm:text-[10rem]">404</p>
            <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">Signal lost in the style grid</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              The page you requested drifted out of orbit. Return to Anaro and continue exploring the premium collection.
            </p>
            <Link to="/" className="mt-8 inline-block">
              <Button>Return home</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default NotFoundPage;