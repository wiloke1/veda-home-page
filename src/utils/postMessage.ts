import { PlanToggleType } from 'components/PlanToggle';
import { createPostMessage } from './createPostMessage';

export interface ChildrenEmitMessage {
  '@landing/ready': undefined;
  '@landing/plan/request': {
    handle: string;
    type: PlanToggleType;
  };
}

export interface ChildrenOnMessage {
  '@landing/plan/success': undefined;
  '@landing/plan/failure': undefined;
  '@landing/currentPlan': {
    plan: string;
  };
}

export const pmChildren = createPostMessage<ChildrenEmitMessage, ChildrenOnMessage>({
  is: 'children',
  url: '*',
});
