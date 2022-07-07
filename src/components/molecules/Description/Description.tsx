import { useState } from 'react';

interface Props {
  description: string;
}

function Description({ description }: Props) {
  const [showDesc, setShowDesc] = useState(false);
  if (description.length <= 300) {
    return <>{description}</>;
  }

  return showDesc ? (
    <>
      {description}{' '}
      <span
        className="text-primary font-medium cursor-pointer"
        onClick={() => setShowDesc(false)}
      >
        Hide
      </span>
    </>
  ) : (
    <>
      {description.slice(0, 300)}
      {'...'}
      <span
        className="text-primary font-medium cursor-pointer"
        onClick={() => setShowDesc(true)}
      >
        Read more
      </span>
    </>
  );
}

export default Description;
