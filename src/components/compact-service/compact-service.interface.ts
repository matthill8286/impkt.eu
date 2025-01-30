import { RichTextProps } from '@graphcms/rich-text-react-renderer';

export interface CompactServiceItemProps {
  to: string;
  title: string;
  content: RichTextProps['content'];
}
