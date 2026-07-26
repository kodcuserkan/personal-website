declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';
  const src: React.FC<React.SVGProps<SVGSVGElement>> & string;
  export default src;
}