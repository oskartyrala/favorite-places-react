import "./PageHeader.css";

interface Header {
  heading: string;
}

function PageHeader(props: Header): JSX.Element {
  return (
    <>
      <h1>{props.heading}</h1>
    </>
  );
}

export default PageHeader;
