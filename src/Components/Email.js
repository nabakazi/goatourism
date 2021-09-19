import React from 'react';
import Link from '@material-ui/core/Link';

export default function Email() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("+91-0832-2494204");
      }}
    >
      Email : Dir-tour.goa@nic.in
    </Link>
  );
}