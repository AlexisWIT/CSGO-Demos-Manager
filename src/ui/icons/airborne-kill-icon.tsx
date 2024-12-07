import React from 'react';
import type { SVGAttributes } from 'react';

type Props = SVGAttributes<SVGElement> & {
  ref?: React.Ref<SVGSVGElement>;
};

export function AirborneKillIcon({ ref, ...props }: Props) {
  return (
    <svg viewBox="0 0 32.074 32.074" enableBackground="new 0 0 32.074 32.074" ref={ref} {...props}>
      <path
        fill="currentColor"
        stroke="#000"
        strokeLinecap="round"
        d="M27.009,28.318
			c0.593-0.221,0.552-0.617-0.116-1.191c-1.334-1.139-1.866-2.197-1.596-3.182c0.132-0.486,0.598-1.117,1.397-1.893
			c0.466-0.449,1.249-1.172,2.354-2.166c0.938-0.922,1.599-1.76,1.972-2.514c0.492-0.982,0.583-1.945,0.272-2.889
			c-0.56-1.712-2.405-2.707-5.535-2.982c-0.848-0.078-2.233-0.124-4.157-0.135c-1.821-0.015-3.148-0.068-3.979-0.16
			c-2.416-0.272-4.836-0.894-7.258-1.867C7.938,8.367,6.071,7.325,4.763,6.212C3.452,5.1,2.067,3.536,0.61,1.521
			c-0.185,5.724,2.195,9.879,7.139,12.468c-2.309,0.238-4.547-0.446-6.719-2.053c1.658,4.485,5.049,6.988,10.169,7.512
			c-1.405,1.018-3.315,1.168-5.726,0.449c2.223,2.84,6.178,4.176,11.864,4.004c-1.101,0.969-2.47,1.529-4.104,1.678
			c2.391,1.627,5.613,2.031,9.664,1.215C24.326,27.83,25.695,28.34,27.009,28.318z"
      />
    </svg>
  );
}
