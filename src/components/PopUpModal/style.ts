import styled from "styled-components";

export const Container = styled.div`

display: grid;
justify-content: center;

button[type="button"] {
  width: 100%;
  padding: 0 1.5rem;
  height: 3rem;
  background: var(--button);
  color: #FFF;
  border-radius: 0.2rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  
  transition: filter 0.2s;
  
  &:hover {
    filter: brightness(0.9);
  }
}

`
