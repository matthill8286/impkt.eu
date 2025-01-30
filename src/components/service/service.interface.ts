import { RichTextProps } from '@graphcms/rich-text-react-renderer';

export type Service = {
  id: string;
  name: string;
  description: string;
};

export interface ServiceProps {
  id: string;
  title: string;
  description: RichTextProps['content'];
  readMoreLabel?: string;
  services?: Service[];
}
