import styled from "styled-components";

import left from "../../images/paginationLeft.svg";
import right from "../../images/paginationRight.svg";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <img src={left} />
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              <p>{i + 1}</p>
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <img src={right} />
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 20px auto;
`;

const Button = styled.button`
  border: none;
  background-color: #ffffff;
  font-size: 10px;
  font-family: "PyeongChang";
  p {
    color: var(--gray2);
    margin-bottom: 4px;
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    cursor: revert;
    transform: revert;
    p {
      color: var(--black);
    }
  }
`;

export default Pagination;
