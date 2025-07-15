import styled, { css } from 'styled-components';

type RowStyleType = {
    type?: 'horizontal' | 'vertical';
};

const Row = styled.div<RowStyleType>`
    display: flex;

    ${(props) => {
        const type = props.type ?? 'horizontal';

        if (type === 'horizontal') {
            return css`
                justify-content: space-between;
                align-items: center;
            `;
        }

        if (type === 'vertical') {
            return css`
                flex-direction: column;
                gap: 1.6rem;
            `;
        }
    }}
`;

export default Row;
