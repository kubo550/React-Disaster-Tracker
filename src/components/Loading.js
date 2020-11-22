import styled from "styled-components";
import { motion } from "framer-motion";

const LoadingWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <h1> Fetching data... </h1>
    </LoadingWrapper>
  );
};

export default Loading;
