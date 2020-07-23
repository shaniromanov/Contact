import { GlobalResponse } from './global-response';

export abstract class DeleteContactResponse implements GlobalResponse{
   abstract Message(): string
}
