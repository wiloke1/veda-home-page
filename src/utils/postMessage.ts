import { PlanToggleType } from 'components/PlanToggle';
import { createPostMessage } from './createPostMessage';

export interface ChildrenEmitMessage {
  '@landing/ready': undefined;
  '@landing/plan/request': {
    handle: string;
    type: PlanToggleType;
    pricePerMonth: string;
    pricePerYear: string;
    title: string;
  };
}

export interface ChildrenOnMessage {
  '@landing/plan/success': {
    plan: string;
    type: 'monthly' | 'yearly';
  };
  '@landing/plan/failure': undefined;
  '@landing/currentPlan': {
    plan: string;
    type: 'monthly' | 'yearly';
  };
}

export const pmChildren = createPostMessage<ChildrenEmitMessage, ChildrenOnMessage>({
  is: 'children',
  url: '*',
});
