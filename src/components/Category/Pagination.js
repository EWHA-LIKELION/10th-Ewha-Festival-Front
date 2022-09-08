import styled from "styled-components";
import left from "../../images/category/left.png";
import right from "../../images/category/right.png";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <img
            src={left}
            style={{ width: "8px", height: "12px", marginTop: "5px" }}
          />
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
          <img
            src={right}
            style={{ width: "8px", height: "12px", marginTop: "5px" }}
          />
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 19px;
  margin: 20px auto 40px auto;
`;

const Button = styled.button`
  line-height: 20px;
  border: none;
  background-color: #ffffff;

  font-size: 14px;
  font-family: "PyeongChang";

  p {
    color: var(--gray2);
    width: 23px;
    height: 23px;

    line-height: 23px;
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    cursor: revert;
    transform: revert;
    p {
      color: var(--white);
      font-weight: 700;
      background-color: var(--green2);

      border-radius: 50%;
    }
  }
`;

export default Pagination;
