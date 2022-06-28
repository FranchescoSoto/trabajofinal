import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { ReservationOpened } from '../../../domain/events/reservation-opened.event';

@EventsHandler(ReservationOpened)
export class AccountOpenedHandler implements IEventHandler<ReservationOpened> {
  constructor() {}

  async handle(event: ReservationOpened) {
    console.log('handle logic for AccountOpened');
    console.log(event);
  }
}