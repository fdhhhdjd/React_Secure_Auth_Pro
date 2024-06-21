import { Helmet } from 'react-helmet-async';

const DocumentTitle = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

export default DocumentTitle;
