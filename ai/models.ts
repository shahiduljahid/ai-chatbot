// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'SA',
    label: 'Sentiment Analysis',
    apiIdentifier: '/SA',
    description: 'Sentiment Analysis',
  },
  {
    id: 'NER',
    label: 'Name Entity Recognition',
    apiIdentifier: '/NER',
    description: 'Name Entity Recognition',
  },
  {
    id: 'QNA',
    label: 'Question Answering',
    apiIdentifier: '/QNA',
    description: 'Question Answering',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'SA';
