import { Tag as TagAntd } from 'antd';
import { FC } from 'react';
import './Tag.scss';

interface TagProps {
  type?: string;
  content: string;
}

export const Tag: FC<TagProps> = ({ type, content }) => {
  const tagType = type ? type : 'default';
  let backgroundColor;
  let color;

  switch (tagType) {
    case 'success': {
      backgroundColor = '#E5E7FA';
      color = '#2760FF';
      break;
    }
    case 'primary': {
      backgroundColor = '#E5E7FA';
      color = '#2760FF';
      break;
    }
    case 'default': {
      backgroundColor = '#D5F2EA';
      color = '#00C07E';
      break;
    }
    case 'info': {
      backgroundColor = '#9A63FE';
      color = '#00C07E';
      break;
    }
    case 'purple': {
      backgroundColor = '#EFE6FF';
      color = '#9A63FE';
      break;
    }
  }

  return (
    <TagAntd className='tag' color='purple' style={{ color: `${color}` }}>
      {content}
    </TagAntd>
  );
};
