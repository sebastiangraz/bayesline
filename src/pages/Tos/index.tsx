import { Markdown, Text } from '@/components';
import style from './tos.module.css';

const content = import.meta.glob<string | string[] | any>(['./tos.mdx'], {
  eager: true
});

export function TOS() {
  const Content = content['./tos.mdx'].default;

  return (
    <>
      <div className={`col`}>
        <Text.H2 className={`col ${style.title}`}>Terms of Service</Text.H2>
        <hr className="col" />
        <Markdown>
          <Content />
        </Markdown>
      </div>
    </>
  );
}
