import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    text-align: center;
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  input {
    opacity: 0.7;
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'],
  button[type='button'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--button);
    color: #fff;
    border-radius: 2rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ClientsButton = styled.div`
  margin: 0.1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  margin: 6rem 6rem;

  div {
    display: grid;
    flex-direction: column;
    justify-content: center;

    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #fff;

    .infor {
      display: block;
    }
  }
`
