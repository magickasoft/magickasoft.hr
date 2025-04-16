import type {ComponentContentPair, Document} from './privacy-policy.d';

/**
 * Builds a React node array from the given Document array.
 *
 * @param {Document} documentArray - The array of Documents to process
 * @return {Array<React.ReactNode>} The array of React nodes generated from the Document array
 */
export const buildDocument = (documentArray: Document): Array<React.ReactNode> => {
  return documentArray.flatMap((item, index) => {
    const [Component, content] = item as ComponentContentPair;
    const isArray = Array.isArray(content);
    return isArray ? (
      content.map((term, i) => <Component key={`${index}_${i}`} dangerouslySetInnerHTML={{__html: term}} />)
    ) : (
      <Component key={index} dangerouslySetInnerHTML={{__html: content}} />
    );
  });
};
