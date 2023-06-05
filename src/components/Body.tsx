import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import MakePost from './MakePost';
import Header from './Header'

interface BodyProps {
  makepost: boolean,
  header: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Body({ makepost, header, children }: BodyProps) {
  return (
    <Container>
      <Stack direction="vertical">
        <Container>
          { header && <Header />}
          { makepost && <MakePost /> }
          {children}
        </Container>
      </Stack>
    </Container>
  );
}