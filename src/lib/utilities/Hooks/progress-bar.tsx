/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable consistent-return */

'use client';

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useSpring,
} from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ComponentProps,
  ReactNode,
  createContext,
  startTransition,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const ProgressBarContext = createContext<ReturnType<typeof useProgress> | null>(
  null
);

export function useProgressBar() {
  const progress = useContext(ProgressBarContext);

  if (progress === null) {
    throw new Error('Need to be inside provider');
  }

  return progress;
}
function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      tick();

      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function useProgress() {
  const [state, setState] = useState<
    'initial' | 'in-progress' | 'completing' | 'complete'
  >('initial');
  const value = useSpring(0, {
    damping: 25,
    mass: 0.5,
    stiffness: 300,
    restDelta: 0.1,
  });

  const handleInterval = () => {
    if (value.get() === 100) {
      value.jump(0);
    }

    const current = value.get();
    const diff = current === 0 ? 15 : current < 50 ? rand(1, 10) : rand(1, 5);
    value.set(Math.min(current + diff, 99));
  };

  useInterval(handleInterval, state === 'in-progress' ? 750 : null);

  useEffect(() => {
    if (state === 'initial') {
      value.jump(0);
    } else if (state === 'completing') {
      value.set(100);
    }

    const handleChange = (latest: number) => {
      if (latest === 100) {
        setState('complete');
      }
    };

    const unsubscribe = value.on('change', handleChange);

    return () => {
      unsubscribe();
    };
  }, [value, state]);

  const reset = () => {
    setState('initial');
  };

  const start = () => {
    setState('in-progress');
  };

  const done = () => {
    setState((prev) =>
      prev === 'initial' || prev === 'in-progress' ? 'completing' : prev
    );
  };

  return { state, value, start, done, reset };
}

export function ProgressBar({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const progress = useProgress();
  const width = useMotionTemplate`${progress.value}%`;

  return (
    <ProgressBarContext.Provider value={progress}>
      <AnimatePresence onExitComplete={progress.reset}>
        {progress.state !== 'complete' && (
          <motion.div
            style={{ width }}
            exit={{ opacity: 0 }}
            className={className}
          />
        )}
      </AnimatePresence>

      {children}
    </ProgressBarContext.Provider>
  );
}

export function ProgressBarLink({
  href,
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  const progress = useProgressBar();
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        progress.start();

        startTransition(() => {
          router.push(href.toString());
          progress.done();
        });
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function useLoaderProgress() {
  const progress = useProgressBar();

  return (func: any) => {
    progress.start();
    startTransition(() => {
      func();
      progress.done();
    });
  };
}
