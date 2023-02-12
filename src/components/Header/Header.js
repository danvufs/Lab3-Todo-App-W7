
import styled from 'styled-components';

// creating a styled component for the header container
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3498db;
  color: white;
  padding: 20px;
`;

// creating a styled component for the title
const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

// creating a styled component for the author
const Author = styled.div`
  font-size: 1.5em;
  font-style: italic;
`;

function Header() {
  return (
    // using the header container styled component
    <HeaderContainer>
      {/* Todo App title */}
      <Title>Todo App</Title>
      {/* Author name */}
      <Author>by Dan Vu</Author>
    </HeaderContainer>
  );
}

export default Header;
