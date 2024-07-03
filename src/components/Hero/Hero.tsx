import { StaggerText } from '@/helpers/StaggerText';
import style from './hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flex, Text } from '@/components';
import hero from '@/assets/homepage-hero.png';

import { ReactP5Wrapper } from '@p5-wrapper/react';

function sketch(p5: any) {
  //set padding for canvas
  p5.setup = () => {
    p5.createCanvas(184, 184, p5.WEBGL);
    p5.colorMode(p5.HSB);
  };
  //set variable for spacing
  let spacing = 12;

  p5.draw = () => {
    p5.background(255, 255, 255, 0);
    p5.stroke(42.8, 10, 72);
    p5.strokeWeight(1.25);
    p5.noFill();
    p5.translate(-p5.width / 2 + 8, -p5.height / 2 + 8);
    p5.translate(0, 0);
    for (let x = 4; x < p5.width; x += spacing) {
      for (let y = 4; y < p5.height; y += spacing) {
        p5.push();
        p5.translate(x, y);
        p5.rotate(p5.atan2(p5.mouseY - y, p5.mouseX - x));
        p5.line(6, 3, 0, 0); // (x1, y1, x2, y2)
        p5.pop();
      }
    }
  };
}
interface HeroProps {
  title?: string;
}

export const Hero = (props: HeroProps) => {
  const { scrollY } = useScroll();

  const yDistance = useTransform(scrollY, [0, 1000], [0, -40]);
  const headerOpacity = useTransform(scrollY, [300, 500], [1, 0]);

  const { title = 'Financial analytics rethought.' } = props;

  return (
    <div className={`col bleed`}>
      <div className={`col ${style.hero}`}>
        <Flex column gap={4}>
          <Text.H1>
            <motion.div style={{ y: yDistance, opacity: headerOpacity }}>
              <StaggerText>{title}</StaggerText>
            </motion.div>
          </Text.H1>
          <Text.Body>
            We deliver the analytics that investment managers are already familiar with, but hyper-customizable and
            blazing fast.
          </Text.Body>
        </Flex>
      </div>
      <div className={`col ${style.ui}`}>
        <div className={`${style.cue}`}>
          <ReactP5Wrapper sketch={sketch} />
        </div>
        <img src={hero} alt="hero" />
      </div>
      {/* <div className={`col ${style.cue}`}>
        <ReactP5Wrapper sketch={sketch} />
      </div> */}
    </div>
  );
};
