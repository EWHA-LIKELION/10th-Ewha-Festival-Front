import styled from "styled-components";

export const PyeongChang = styled.p`
  font-family: "PyeongChang";
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  line-height: ${({ height }) => height};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const PyeongChang_Peace = styled.p`
  font-family: "PyeongChangPeace";
  font-weight: ${({ weight }) => weight};
  line-height: ${({ height }) => height};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const NanumSquare = styled.p`
  font-family: "NanumSquare", sans-serif;
  font-weight: ${({ weight }) => weight};
  line-height: ${({ height }) => height};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;

export const Pretendard = styled.p`
  font-family: "Pretendard";
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  line-height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
`;
