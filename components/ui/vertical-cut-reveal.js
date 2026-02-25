"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const splitIntoCharacters = (text) => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
};

const VerticalCutReveal = forwardRef(function VerticalCutReveal(
  {
    children,
    reverse = false,
    transition = {
      type: "spring",
      stiffness: 190,
      damping: 22,
    },
    splitBy = "words",
    staggerDuration = 0.2,
    staggerFrom = "first",
    containerClassName,
    wordLevelClassName,
    elementLevelClassName,
    onClick,
    onStart,
    onComplete,
    autoStart = true,
    ...props
  },
  ref
) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const [isAnimating, setIsAnimating] = useState(false);

  const elements = useMemo(() => {
    const words = text.split(" ");
    if (splitBy === "characters") {
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1,
      }));
    }

    const parts =
      splitBy === "words"
        ? text.split(" ")
        : splitBy === "lines"
          ? text.split("\n")
          : text.split(splitBy);

    return parts.map((el, i) => ({
      characters: [el],
      needsSpace: i !== parts.length - 1,
    }));
  }, [text, splitBy]);

  const getStaggerDelay = useCallback(
    (index) => {
      const total = elements.reduce(
        (acc, item) => acc + item.characters.length + (item.needsSpace ? 1 : 0),
        0
      );

      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      if (typeof staggerFrom === "number") {
        return Math.abs(staggerFrom - index) * staggerDuration;
      }
      return index * staggerDuration;
    },
    [elements, staggerFrom, staggerDuration]
  );

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    if (onStart) onStart();
  }, [onStart]);

  useImperativeHandle(
    ref,
    () => ({
      startAnimation,
      reset: () => setIsAnimating(false),
    }),
    [startAnimation]
  );

  useEffect(() => {
    if (autoStart) startAnimation();
  }, [autoStart, startAnimation]);

  const variants = {
    hidden: { y: reverse ? "-100%" : "100%" },
    visible: (i) => ({
      y: 0,
      transition: {
        ...transition,
        delay: (transition?.delay || 0) + getStaggerDelay(i),
      },
    }),
  };

  return (
    <span
      className={cn(
        containerClassName,
        "flex flex-wrap whitespace-pre-wrap",
        splitBy === "lines" && "flex-col"
      )}
      onClick={onClick}
      {...props}
    >
      <span className="sr-only">{text}</span>
      {elements.map((wordObj, wordIndex, array) => {
        const previousCharsCount = array
          .slice(0, wordIndex)
          .reduce((sum, word) => sum + word.characters.length, 0);

        return (
          <span
            key={wordIndex}
            aria-hidden="true"
            className={cn("inline-flex overflow-hidden", wordLevelClassName)}
          >
            {wordObj.characters.map((char, charIndex) => (
              <span
                className={cn(elementLevelClassName, "whitespace-pre-wrap relative")}
                key={`${wordIndex}-${charIndex}`}
              >
                <motion.span
                  custom={previousCharsCount + charIndex}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  variants={variants}
                  onAnimationComplete={
                    wordIndex === elements.length - 1 && charIndex === wordObj.characters.length - 1
                      ? onComplete
                      : undefined
                  }
                  className="inline-block"
                >
                  {char}
                </motion.span>
              </span>
            ))}
            {wordObj.needsSpace && <span> </span>}
          </span>
        );
      })}
    </span>
  );
});

VerticalCutReveal.displayName = "VerticalCutReveal";

export { VerticalCutReveal };

