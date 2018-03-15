import { Component } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, WsResponse, OnGatewayConnection } from '@nestjs/websockets';
import { Observable } from 'rxjs/Observable';

@Component()
@WebSocketGateway({ port: 81, namespace: 'seeker' })
export class SeekerService implements OnGatewayConnection {

    constructor() {
        console.log('seeker service');
    }

    @SubscribeMessage('seeker')
    onEvent(client, data): WsResponse<any> {
        const event = 'events';
        const response = [1, 2, 3];

        return Observable.create(response)
            .map((res) => ({ event, data: res }));
    }

    handleConnection(client: any) {
        console.log('client is connected', client);
    }
}