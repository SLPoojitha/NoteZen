import styled from 'styled-components';

export const InputForm = styled.form`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 3rem auto;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
    padding: 12px 16px;
    
    @media (max-width: 768px) { width: 60%; }
    @media (max-width: 500px) { width: 80%; }
`;

export const InputTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-family: inherit;
    font-weight: 500;
    resize: none;
    padding: 2rem 0;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-family: inherit;
    font-weight: 500;
    font-size: 1.6rem;
`;

export const InputBtn = styled.button`
    width: 20px;
    height: 20px;
    background-color: #fff;
    margin-left: auto;
`;
